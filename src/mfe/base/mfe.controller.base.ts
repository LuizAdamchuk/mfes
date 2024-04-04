/*
------------------------------------------------------------------------------
This code was generated by Amplication.

Changes to this file will be lost if the code is regenerated.

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MfeService } from "../mfe.service";
import { MfeCreateInput } from "./MfeCreateInput";
import { Mfe } from "./Mfe";
import { MfeFindManyArgs } from "./MfeFindManyArgs";
import { MfeWhereUniqueInput } from "./MfeWhereUniqueInput";
import { MfeUpdateInput } from "./MfeUpdateInput";
import { UsersMfeService } from "../../usersMfe/usersMfe.service";
import { UserService } from "../../user/user.service";

export class MfeControllerBase {
  constructor(
    protected readonly service: MfeService,
    protected readonly userService: UserService,
    protected readonly usersMfeService: UsersMfeService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Mfe })
  async createMfe(@common.Body() data: MfeCreateInput): Promise<Mfe> {
    const mfe = await this.service.createMfe({
      data: data,
      select: {
        active: true,
        authenticationRequired: true,
        createdAt: true,
        description: true,
        id: true,
        key: true,
        updatedAt: true,
      },
    });

    if (data.authenticationRequired === true) return mfe;

    const userIds = await this.userService.getUserIds();

    const mfeUsers = userIds.map((userId) => ({ userId, mfeId: mfe.id }));

    await this.usersMfeService.createManyUsersMfe(mfeUsers);

    return mfe;
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Mfe] })
  @ApiNestedQuery(MfeFindManyArgs)
  async mfes(@common.Req() request: Request): Promise<Mfe[]> {
    const args = plainToClass(MfeFindManyArgs, request.query);
    return this.service.mfes({
      ...args,
      select: {
        active: true,
        authenticationRequired: true,
        createdAt: true,
        description: true,
        id: true,
        key: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Mfe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mfe(@common.Param() params: MfeWhereUniqueInput): Promise<Mfe | null> {
    const result = await this.service.mfe({
      where: params,
      select: {
        active: true,
        authenticationRequired: true,
        createdAt: true,
        description: true,
        id: true,
        key: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Mfe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMfe(
    @common.Param() params: MfeWhereUniqueInput,
    @common.Body() data: MfeUpdateInput
  ): Promise<Mfe | null> {
    try {
      const mfe = await this.service.updateMfe({
        where: params,
        data: data,
        select: {
          active: true,
          authenticationRequired: true,
          createdAt: true,
          description: true,
          id: true,
          key: true,
          updatedAt: true,
        },
      });

      if (
        data.authenticationRequired === true ||
        mfe.authenticationRequired === true
      ) {
        return mfe;
      }

      const userIds = await this.userService.getUserIds();

      const mfeUsers = userIds.map((userId) => ({ userId, mfeId: mfe.id }));

      await this.usersMfeService.createManyUsersMfe(mfeUsers);

      return mfe;
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Mfe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMfe(
    @common.Param() params: MfeWhereUniqueInput
  ): Promise<Mfe | null> {
    try {
      await this.usersMfeService.deleteUsersMfeByMfeId(params.id);

      return await this.service.deleteMfe({
        where: params,
        select: {
          active: true,
          authenticationRequired: true,
          createdAt: true,
          description: true,
          id: true,
          key: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
