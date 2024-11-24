import {Repository} from "../../cores/Repository";
import {User} from "@prisma/client";

export class UserRepository extends Repository {
    constructor() {
        super();
    };

    async create(user: User): Promise<User> {
        try {
            return await this.prismaClient.user.create({data: user})
        } catch (e) {
            throw e;
        } finally {
            await this.prismaClient.$disconnect()
        }
    };

    async getAll(): Promise<User[]> {
        try {
            return await this.prismaClient.user.findMany();
        } catch (e) {
            throw e;
        } finally {
            await this.prismaClient.$disconnect()
        }
    }
}