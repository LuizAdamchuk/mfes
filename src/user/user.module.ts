import { Module, forwardRef } from "@nestjs/common";
import { UserModuleBase } from "./base/user.module.base";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UsersMfeModule } from "src/usersMfe/usersMfe.module";
import { MfeModule } from "src/mfe/mfe.module";

@Module({
  imports: [
    UserModuleBase,
    forwardRef(() => UsersMfeModule),
    forwardRef(() => MfeModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
