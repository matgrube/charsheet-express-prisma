import { UserRepository } from "../repositories/user.repository";
import { Request, Response } from "express";

export class UserController {
    userRepository = new UserRepository();
    constructor() { }

    async getAll(req: Request, res: Response) {
        try {
            const result = await this.userRepository.getAll();
            return res.json(result).status(200);
        } catch (e) { throw e }
    }
}