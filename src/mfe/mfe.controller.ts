import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MfeService } from "./mfe.service";
import { MfeControllerBase } from "./base/mfe.controller.base";
import { UserService } from "../user/user.service";
import { UsersMfeService } from "../usersMfe/usersMfe.service";

@swagger.ApiTags("mfes")
@common.Controller("mfes")
export class MfeController extends MfeControllerBase {
  constructor(
    protected readonly service: MfeService,
    protected readonly userService: UserService,
    protected readonly usersMfeService: UsersMfeService
  ) {
    super(service, userService, usersMfeService);
  }
}
