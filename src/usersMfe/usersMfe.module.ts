import { Module } from "@nestjs/common";
import { UsersMfeModuleBase } from "./base/usersMfe.module.base";
import { UsersMfeService } from "./usersMfe.service";
import { UsersMfeController } from "./usersMfe.controller";

@Module({
  imports: [UsersMfeModuleBase],
  controllers: [UsersMfeController],
  providers: [UsersMfeService],
  exports: [UsersMfeService],
})
export class UsersMfeModule {}
