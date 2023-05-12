import { Field, InputType, ObjectType } from '@nestjs/graphql'

@InputType()
export class RegisterInput {
  @Field(() => String, { nullable: false })
  public email: string

  @Field(() => String, { nullable: false })
  public password: string
}


@ObjectType()
export class RegisterOutput {
  @Field(() => String)
  public accessToken: string

  @Field(() => String)
  public refreshToken: string
}
