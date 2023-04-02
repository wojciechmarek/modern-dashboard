import { Field, InputType, ObjectType } from '@nestjs/graphql'

@InputType()
export class UesrInput {
  @Field(() => String)
  public username: string

  @Field(() => String)
  public password: string

  @Field(() => Boolean)
  public isRememberMeChecked: boolean
}

@ObjectType()
export class UserOutput {
  @Field(() => String)
  public accessToken: string

  @Field(() => String)
  public refreshToken: string
}
