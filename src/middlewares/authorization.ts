import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.SECRET;
function sign(req: Request, res: Response, next: NextFunction) {
  try {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };
    //@ts-ignore
    const token = jwt.sign({ user }, secret);
    next(token);
  } catch (error) {
    res.status(401);
  }
}
function verify(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;
    //@ts-ignore
    jwt.verify(token, secret)
    next();
  } catch (error) {
    res.status(401).json({message:'not authorized'});
  }
}

export { sign, verify };
