
import {Request, Response } from "express";
import { getRepository, Raw } from "typeorm";
import databses from "../config/databases";
import { Books } from "../entity/book.entity";
// import { Inventories } from "../entity/inventory.entity";
import createLogger from 'logging';
import { insertFiles } from "../clasess/insertfile";

const NAMESPACE = 'book';
const logger = createLogger(`${NAMESPACE}`);

interface bookQuery {
    title: string;
    creator: string;
    publisher: string;
    publication_year: number;
    cover_image: string;
    description: string;
    book_id: number;
    book_ids: []
}
interface Paginate {
    per_page: number;
    page: number;
    searching: string;
}
export const InsertBooks = async(req: Request, res: Response) => {
    const { title, creator, publisher, publication_year, cover_image, description } = req.body as bookQuery;
    try{
        const datafiles     = await insertFiles(cover_image, title);
        const storeBooks    = await databses.getRepository(Books)
                            .save({
                                title: title,
                                creator: creator,
                                publisher: publisher,
                                publication_year: publication_year,
                                cover_image: datafiles,
                                description: description
                            });
        res.json({
            status: 200,
            data: storeBooks
        });
    }catch(e){
        logger.error('add', e)
        res.status(400).json({
            error: e
        })
    }
}
export const UpdateBooks = async(req: Request, res: Response) => {
    const { title, creator, publisher, publication_year, cover_image, description, book_id } = req.body as bookQuery;
    const [, type] = cover_image.split(';')[0].split('/');
    if (type !== undefined){
        const datafiles     = await insertFiles(cover_image, title);
        const updateBookes  = await databses.getRepository(Books)
                            .createQueryBuilder()
                            .where('id = :bookid', {bookid: book_id})
                            .update(Books)
                            .set({title, creator, publisher,publication_year, cover_image: datafiles, description})
                            .execute();
        res.json({
            status: 200,
            data: updateBookes
        })
    }else{
        const updateBookes  = await databses.getRepository(Books)
                            .createQueryBuilder()
                            .where('id = :bookid', {bookid: book_id})
                            .update(Books)
                            .set({title, creator, publisher,publication_year, cover_image, description})
                            .execute()
        res.json({
            status: 200,
            data: updateBookes
        })
    }
}
export const DeleteBooks = async(req: Request, res: Response) => {
    const { book_ids } = req.body as bookQuery;

    const DeleteBooks       = await databses.getRepository(Books)
                            .createQueryBuilder()
                            .delete()
                            .from(Books)
                            .where('id IN (:...book_ids)', { book_ids })
                            .execute();
    res.json({
            status: 200,
            data: DeleteBooks
        })
}
export const getAllBooks = async (req: Request, res: Response) => {
    const query = req.query as any;
    const paginates = query as Paginate;
    const {
        per_page,
        page,
        searching
    } = paginates

    const limit = per_page;
    const offset = (page - 1) * limit

    let from;
    if (page == 1) {
        from = 1;
    } else {
        from = Number(offset) + 1;
    }
    const totalbooks = await databses.getRepository(Books).count();
    const books     = await databses.getRepository(Books)
                    .find({
                        relations: {
                            inventories: true
                        },
                        where: {
                            title: Raw((alias) => `LOWER(${alias}) LIKE LOWER(:value)`, {
                                value: `%${searching}%`,
                              })
                        },
                        
                        skip: offset,
                        take: limit
                    });
    res.status(200).json({
        message: 'success',
        code: 200,
        books,
        current_page: page,
        to: limit,
        per_page: page,
        total: totalbooks,
        from: from,
    })
}
export const getDetailBooks = async (req: Request, res: Response) => {
    const { book_id } = req.body as bookQuery;
    const books     = await databses.getRepository(Books)
                    .findOne({
                        relations: {
                            inventories: true
                        },
                        where: {
                            id: book_id
                        }
                    });
    res.status(200).json({
        code: 200,
        data: books
    })
}