import { Repository } from '../../cores/Repository';
import { Character } from '@prisma/client';

export class CharacterRepository extends Repository {
    constructor() {
        super();
    };

    async create(character : Character): Promise<Character> {
        try {
            return await this.prismaClient.character.create({ data: character })
        } catch (e) {
            throw e;
        } finally {
            await this.prismaClient.$disconnect()
        }
    };

    async getAll(): Promise<Character[]> {
        try {
            return await this.prismaClient.character.findMany()
        } catch (e) {
            throw e;
        } finally {
            await this.prismaClient.$disconnect();
        }
    }
}