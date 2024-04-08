import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { Transform, Type } from "class-transformer";
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
  @Transform((x) => {
    console.log("🚀 ~ BooleanNullableFilter ~ @Transform ~ x:", x);

    return x.value === "true" ? true : x.value === "false" ? false : undefined;
  })
  equals?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Transform(({ value }) => {
    return value === "true" ? true : value === "false" ? false : undefined;
  })
  not?: boolean | null;
}
