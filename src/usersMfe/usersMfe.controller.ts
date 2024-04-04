import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsersMfeService } from "./usersMfe.service";
import { UsersMfeControllerBase } from "./base/usersMfe.controller.base";

@swagger.ApiTags("usersMfes")
@common.Controller("usersMfes")
export class UsersMfeController extends UsersMfeControllerBase {
  constructor(protected readonly service: UsersMfeService) {
    super(service);
  }
}
