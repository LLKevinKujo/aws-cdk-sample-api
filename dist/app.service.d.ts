import { PrismaService } from "./db/prisma.service";
import { PlayerDto } from "./app.dto";
export declare class AppService {
    private readonly prismaSerivce;
    constructor(prismaSerivce: PrismaService);
    createPlayer(player: PlayerDto): Promise<import(".prisma/client").Player>;
    getAllPlayer(): Promise<import(".prisma/client").Player[]>;
    deletePlayer(playerName: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteAll(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
