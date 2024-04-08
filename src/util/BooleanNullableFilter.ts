import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { Transform, Type } from "class-transformer";

const optionalBooleanMapper = new Map([
  ["undefined", undefined],
  ["true", true],
  ["false", false],
]);
@InputType({
  isAbstract: true,
  description: undefined,
})
export class BooleanNullableFilter {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Transform(({ value }) => optionalBooleanMapper.get(value))
  equals?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Transform(({ value }) => optionalBooleanMapper.get(value))
  not?: boolean | null;
}
