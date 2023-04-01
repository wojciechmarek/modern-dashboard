import { Field, InputType, ObjectType } from '@nestjs/graphql'

@InputType()
export class LoginInput {
  @Field(() => String)
  public username: string

  @Field(() => String)
  public password: string

  @Field(() => Boolean)
  public isRememberMeChecked: boolean
}

@ObjectType()
export class LoginOutput {
  @Field(() => String)
  public accessToken: string

  @Field(() => String)
  public refreshToken: string
}
