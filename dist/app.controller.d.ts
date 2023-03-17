import { AppService } from "./app.service";
import { PlayerDto } from "./app.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllPlayers(): Promise<import(".prisma/client").Player[]>;
    createPlayer(player: PlayerDto): Promise<import(".prisma/client").Player>;
    deletePlayer(playerName: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteAll(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
