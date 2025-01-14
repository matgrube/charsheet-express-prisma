import { Request, Response } from 'express';
import { hash, compare } from 'bcrypt';
import { UserRepository } from '../repositories/user.repository';
import jwt from 'jsonwebtoken';

export class AuthController {
    private userRepository: UserRepository = new UserRepository();
    constructor() { };

    async register(req: Request, res: Response) {
        try {
            await this.userRepository.create({ ...req.body, password: await hash(req.body.password, 10) });
            return res.json({ message: 'User created' }).status(201);
        } catch (e) { throw e }
    };

    async login(req: Request, res: Response) {
        try {
            const body = req.body;
            const user = await this.userRepository.login(body.email);
            if (!user || !await compare(body.password, user.password)) return res.json({ message: 'Invalid credentials' }).status(401);
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET || 'jwt_secret');
            return res.json({ token }).status(200);
        } catch (e) { throw e }
    };
}