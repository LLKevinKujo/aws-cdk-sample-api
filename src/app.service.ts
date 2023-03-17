import { Injectable } from "@nestjs/common";
import { PrismaService } from "./db/prisma.service";
import { PlayerDto } from "./app.dto";

@Injectable()
export class AppService {
  constructor ( private readonly prismaSerivce: PrismaService ) {}

  async createPlayer(player: PlayerDto) {
    const res = await this.prismaSerivce.player.create({
      data: player
    })

    return res
  }

  async getAllPlayer() {
    const res = await this.prismaSerivce.player.findMany({})

    return res
  }

  async deletePlayer(playerName: string) {
    const res = await this.prismaSerivce.player.deleteMany({
      where: { name: playerName }
    })

    return res
  }

  async deleteAll() {
    const res = await this.prismaSerivce.player.deleteMany({
      where: {}
    })

    return res
  }
}