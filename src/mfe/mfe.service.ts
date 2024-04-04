import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MfeServiceBase } from "./base/mfe.service.base";

@Injectable()
export class MfeService extends MfeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
