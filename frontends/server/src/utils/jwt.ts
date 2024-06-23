import "../lib/env";
import jwt, { JwtPayload } from "jsonwebtoken";

import { Students } from "../entity/students.entity";

import { NextFunction, Request } from "express";
export interface CustomRequest extends Request {
  token: string | JwtPayload;
 }
interface TokenData {
  token: string;
  expiresIn: number | string;
}

export interface DataStoredInToken {
  id: number;
  email: string;
  name: string;
  role_id: number;
}

export const createToken = (user: Students): TokenData => {
  let expiresIn = '10h';

  const secret = process.env.JWT_SECRET!;

  const data: DataStoredInToken = {
    id: user.id,
    name: user.name,
    email: user.email,
    role_id: user.role_id
  };
  return {
    expiresIn,
    token: jwt.sign(data, secret, { expiresIn }),
  };
};

export const getUsers = (stringtoken: string) => {
  const secrets = process.env.JWT_SECRET!;  
  const decoded = jwt.verify(stringtoken, secrets) as JwtPayload;
  return decoded
}


export const decodeToken = (req: Request) => {
  const bearer = req.headers.authorization;
  const token = bearer!.split(" ")[1];
  const parsedToken = jwt.decode(token) as DataStoredInToken;
  return parsedToken;
};