import { Field, InputType, ObjectType } from '@nestjs/graphql'

@InputType()
export class ResetPasswordInput {
  @Field(() => String, { nullable: false })
  public email: string
}

@ObjectType()
export class ResetPasswordOutput {
  @Field(() => String)
  public accessToken: string

  @Field(() => String)
  public refreshToken: string
}
