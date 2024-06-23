import "../lib/env";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, ingatSaya} = req.body;
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
        if(err) return res.sendStatus(403);
        next();
    })
}