import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload {
    sub: string;
}

export function isAutheticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Receber o token
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    //Pegando apenas o token
    const [, token] = authToken.split(' ');

    console.log(token)

    return next();
}