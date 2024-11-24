import { PrismaClient } from '@prisma/client';

export class Repository {
    prismaClient: PrismaClient = new PrismaClient();
    constructor() {
    }
}