import express, { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import databses from "../config/databases";
import { Inventories } from "../entity/inventory.entity";
import createLogger from 'logging';

const NAMESPACE = 'inventory';
const logger = createLogger(`${NAMESPACE}`);

interface Query{
    book_id: number;
    qty: number;
    price: number;
}

export const InsertInventories = async(req: Request, res: Response) => {
    const { book_id, qty, price} = req.body as Query;
    await databses.getRepository(Inventories)
                            .createQueryBuilder()
                            .delete()
                            .from(Inventories)
                            .where("book_id = :id", { id: book_id })
                            .execute();
    const inventoriesStore      = await databses.getRepository(Inventories)
                                .save({
                                    book_id: book_id,
                                    qty: qty,
                                    price: price
                                });

    res.json({
        status: 200,
        inventoriesStore
    })
}