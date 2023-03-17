"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./db/prisma.service");
let AppService = class AppService {
    constructor(prismaSerivce) {
        this.prismaSerivce = prismaSerivce;
    }
    async createPlayer(player) {
        const res = await this.prismaSerivce.player.create({
            data: player
        });
        return res;
    }
    async getAllPlayer() {
        const res = await this.prismaSerivce.player.findMany({});
        return res;
    }
    async deletePlayer(playerName) {
        const res = await this.prismaSerivce.player.deleteMany({
            where: { name: playerName }
        });
        return res;
    }
    async deleteAll() {
        const res = await this.prismaSerivce.player.deleteMany({
            where: {}
        });
        return res;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map