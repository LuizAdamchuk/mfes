import { Module, forwardRef } from "@nestjs/common";
import { MfeModuleBase } from "./base/mfe.module.base";
import { MfeService } from "./mfe.service";
import { MfeController } from "./mfe.controller";
import { UsersMfeModule } from "../usersMfe/usersMfe.module";
import { UserModule } from "../user/user.module";

@Module({
  imports: [MfeModuleBase, forwardRef(() => UserModule), UsersMfeModule],
  controllers: [MfeController],
  providers: [MfeService],
  exports: [MfeService],
})
export class MfeModule {}
