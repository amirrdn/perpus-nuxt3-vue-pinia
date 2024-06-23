import {Request, Response } from "express";
import { getRepository } from "typeorm";
import databses from "../config/databases";
import createLogger from 'logging';
import { Transactions } from '../entity/transaction.entity';
import { DetailTransaction } from "../entity/detail.entity";
import moment from 'moment';
import jwt, { JwtPayload } from 'jsonwebtoken';

const NAMESPACE = 'transaction';
const logger = createLogger(`${NAMESPACE}`);

interface QueryTrans{
    student_id: number;
    loan_date: string;
    return_date: string;
    transaction_id: number;
    transaction_detail: DetailTrans[]
}

interface Paginate {
    per_page: number;
    page: number;
    user_id: number;
}
interface DetailTrans{
    transaction_id: number;
    book_id: number;
    qty: number;
}

export const InsertTransaction = async (req: Request, res: Response) => {
    const { student_id, loan_date, return_date, transaction_detail} = req.body as QueryTrans;
    const insertTrans           = await databses.getRepository(Transactions)
                                .save({
                                    student_id: student_id,
                                    loan_date: moment(loan_date).format('YYYY-MM-DD'),
                                    return_date: moment(return_date).format('YYYY-MM-DD')
                                });
    transaction_detail.map((_b, index) => {
        transaction_detail[index].transaction_id = insertTrans.id;
    })
    console.log(transaction_detail)
    const insertDetail          = await databses.getRepository(DetailTransaction)
                                .save(transaction_detail);
     res.json({
            status: 200,
            data: insertDetail
        });
}
export const UpdateTransaction = async (req: Request, res: Response) => {
    const {
        student_id,
        loan_date,
        return_date,
        transaction_detail,
        transaction_id
    } = req.body as QueryTrans;
    const trans = await databses.getRepository(Transactions)
        .createQueryBuilder()
        .where('id = :transaction_id', {
            transaction_id: transaction_id
        })
        .update(Transactions)
        .set({
            student_id: student_id,
            loan_date: moment(loan_date).format('YYYY-MM-DD'),
            return_date: moment(return_date).format('YYYY-MM-DD')
        });
    transaction_detail.map((_b, index) => {
        transaction_detail[index].transaction_id = transaction_id;
    })
    await databses.getRepository(DetailTransaction)
        .createQueryBuilder()
        .delete()
        .from(DetailTransaction)
        .where('transaction_id = :transaction_id', {
            transaction_id: transaction_id
        })
        .execute();
    const insertDetail = await databses.getRepository(DetailTransaction)
        .save(transaction_detail);
    res.json({
        status: 200,
        data: trans
    });
}
export const DeleteTransactions = async (req: Request, res: Response) => {
    const {
        transaction_id
    } = req.body as QueryTrans;
    const trans         = await databses.getRepository(Transactions)
                        .findOne({
                            where:{
                                id: transaction_id
                            }
                        })
    const DetailTrans   = await databses.getRepository(DetailTransaction)
                        .find({
                            where: {
                                transaction_id: transaction_id
                            }
                        })
    if(DetailTrans){
        DetailTrans.map( async(b) => {
            await databses.getRepository(DetailTransaction).remove(b);
        })
    }
    if (trans){
        await databses.getRepository(Transactions).remove(trans)
    }
    
 
    res.json({
        status: 200
    })
}
export const DetailData = async(req: Request, res: Response) => {
    const { transaction_id } = req.body as QueryTrans;
    const datatrans     = await databses.getRepository(Transactions)
                        .findOne({
                            relations:{
                                details: true
                            },
                            where:{
                                id: transaction_id
                            }
                        });
    res.json({
        status: 200,
        data: datatrans
    });
}
export const transactionList = async (req: Request, res: Response) => {
    const query = req.query as any;
    const paginates = query as Paginate;
    const {
        per_page,
        page,
        user_id
    } = paginates

    const limit = per_page;
    const offset = (page - 1) * limit

    let from;
    if (page == 1) {
        from = 1;
    } else {
        from = Number(offset) + 1;
    }
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let users = null;
    if(token){
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        if(decoded.role_id !== 1){
            users = decoded.id
        }
    }
    const totaltrans    = await databses.getRepository(Transactions).count({
                        where: {
                            student_id: users
                        }
    })
    const datatrans     = await databses.getRepository(Transactions)
                        .find({
                            relations:{
                                details: {
                                    books: true
                                },
                                user: true
                            },
                            where:{
                                student_id: users
                            },
                            skip: offset,
                            take: limit
                        });
    res.json({
        message: 'success',
        code: 200,
        datatrans,
        current_page: page,
        to: limit,
        per_page: page,
        total: totaltrans,
        from: from,
    });
}