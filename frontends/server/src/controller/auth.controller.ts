import express, { Router, Request, Response } from "express";
import { getRepository, Raw } from "typeorm";
import bcryptjs from "bcryptjs";
import { Students } from "../entity/students.entity";
import databses from "../config/databases";
import { createToken } from "../utils/jwt";
import { Roles } from "../entity/roles.entity";

interface Query {
    name:string;
    nim:string;
    email: string;
    major: string;
    student_year: number;
    password: string;
    role_id: number;
    user_id: number;
    user_ids: []
};
interface Paginate {
    per_page: number;
    page: number;
    searching: string;
}
export const Register = async(req: Request, res: Response) => {
    const { name, nim, email, major, student_year, password, role_id } = req.body as Query;
    const salt = await bcryptjs.genSalt(10);
    const user = await databses.getRepository(Students).save({
        name, nim, email, major, student_year,
        password: await bcryptjs.hash(password.toString(), salt), role_id
    });

    res.send(user);
}
export const UpdateUsers = async (req: Request, res: Response) => {
    const {
        name,
        nim,
        email,
        major,
        student_year,
        password,
        role_id,
        user_id
    } = req.body as Query;
    const salt = await bcryptjs.genSalt(10)
    const users = await databses.getRepository(Students)
        .findOne({
            where: {
                id: user_id
            }
        });
    let UpdateUsers;
    if (password) {
        UpdateUsers = await databses.getRepository(Students)
            .createQueryBuilder()
            .where('id = :user_id', {
                user_id: user_id
            })
            .update(Students)
            .set({
                name,
                nim,
                email,
                major,
                student_year,
                password: await bcryptjs.hash(password.toString(), salt),
                role_id
            })
            .execute();

    } else {
        UpdateUsers = await databses.getRepository(Students)
            .createQueryBuilder()
            .where('id = :user_id', {
                user_id: user_id
            })
            .update(Students)
            .set({
                name,
                nim,
                email,
                major,
                student_year,
                role_id
            })
            .execute();
    }
    res.json({
        status: 200,
        data: UpdateUsers
    })
}
export const DeleteUsers = async (req: Request, res: Response) => {
    const {
        user_ids
    } = req.body as Query;

    const DeleteUsers = await databses.getRepository(Students)
        .createQueryBuilder()
        .delete()
        .from(Students)
        .where('id IN (:...user_ids)', {
            user_ids
        })
        .execute();
    res.json({
        status: 200,
        data: DeleteUsers
    })
}
export const Login = async (req: Request, res: Response) => {
    const {
        email,
        password
    } = req.body as Query;

    const usersexitst = await databses.getRepository(Students).findOne({
        relations: {
            roles: true
        },
        where: {
            email: email
        },
    });
    if (!usersexitst) {
        return res.status(400).send({
            message: "invalid credentials"
        });
    }
    const isValidPassword = await bcryptjs.compare(password, usersexitst.password.toString());
    if (!isValidPassword) {
        return res.status(401).json({
            success: false,
            errors: 'Periksa kembali data anda',
        });
    }
    const accessToken = createToken(usersexitst);
    usersexitst.save();

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 //equivalent to 1 day
    });
    return res
        .cookie("accessToken", accessToken, {
            expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000),
        })
        .status(200)
        .json({
            success: true,
            accessToken: accessToken,
            user: usersexitst,
        });
}
export const getAlluser = async(req: Request, res: Response) => {
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
    const totalUser     = await databses.getRepository(Students).count();
    const users         = await databses.getRepository(Students)
                        .find({
                        relations: {
                            roles: true
                        },
                        where: {
                            name: Raw((alias) => `LOWER(${alias}) LIKE LOWER(:value)`, {
                                value: `%${searching}%`,
                              })
                        },                        
                        skip: offset,
                        take: limit
                    });
    res.status(200).json({
        message: 'success',
        code: 200,
        users,
        current_page: page,
        to: limit,
        per_page: page,
        total: totalUser,
        from: from,
    })
}
export const getRoles = async(req: Request, res: Response) => {
    const getrole   = await databses.getRepository(Roles)
                    .find({
                        order:{
                            name: 'ASC'
                        }
                    })
    res.json({
        role: getrole
    })
}