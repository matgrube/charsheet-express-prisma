import { CharacterRepository } from '../repositories/character.repository';
import { Request, Response } from 'express';
import { Character } from '@prisma/client';

export class CharacterController {
    characterRepository = new CharacterRepository();
    constructor() {};

    async getAll(req: Request, res: Response) {
        try {
            const result = await this.characterRepository.getAll();
            return res.json(result).status(200);
        } catch (error) {throw error}
    }

    async create (req: Request, res: Response) {
        try {
            const body = req.body;
            await this.characterRepository.create(req.body);
            return res.json({body}).status(200);
        } catch (e) {throw e}
    };
}