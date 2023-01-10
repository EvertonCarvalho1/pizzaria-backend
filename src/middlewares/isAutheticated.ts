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

    try {
        //Validar token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        return next();

    } catch (error) {
        return res.status(401).end();
    }
}