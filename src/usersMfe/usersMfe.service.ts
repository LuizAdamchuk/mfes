import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsersMfeServiceBase } from "./base/usersMfe.service.base";

@Injectable()
export class UsersMfeService extends UsersMfeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
