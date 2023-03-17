import { Module } from "@nestjs/common";
import { PrismaModule } from "./db/prisma.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    PrismaModule
  ],
  providers: [
    AppService
  ],
  controllers: [
    AppController
  ]
})
export class PlayerModule {}
