import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import { MfeService } from "src/mfe/mfe.service";
import { UsersMfeService } from "src/usersMfe/usersMfe.service";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly mfeService: MfeService,
    protected readonly usersMfeService: UsersMfeService
  ) {
    super(service, mfeService, usersMfeService);
  }
}
