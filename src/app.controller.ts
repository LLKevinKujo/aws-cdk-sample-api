import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { PlayerDto } from "./app.dto";


@Controller('')
export class AppController {
  constructor ( private readonly appService: AppService ) {}

  @Get()
  getAllPlayers(
  ) {
    return this.appService.getAllPlayer()
  }

  @Post()
  createPlayer(
    @Body() player: PlayerDto
  ) {
    return this.appService.createPlayer(player)
  }

  @Delete(':playerName')
  deletePlayer(
    @Param('playerName') playerName: string
  ) {
    console.log(playerName)
    return this.appService.deletePlayer(playerName)
  }

  @Delete()
  deleteAll() {
    return this.appService.deleteAll()
  }

}