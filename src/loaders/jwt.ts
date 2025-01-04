import { NextFunction, type Request, type Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

declare module 'express-serve-static-core' {
    interface Request {
        user?: string | JwtPayload;
    }
}

const jwtSecret = process.env.JWT_SECRET || 'jwt_secret';

export const authenticated = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, jwtSecret, (err, user) => {
            if (err) {
                return res.status(403).send('Invalid token');
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).send('Unauthorized');
    }
};