import { Field, InputType, ObjectType } from '@nestjs/graphql'

@InputType()
export class LoginInput {
  @Field(() => String, { nullable: false })
  public email: string

  @Field(() => String, { nullable: false })
  public password: string

  @Field(() => Boolean, { defaultValue: false })
  public isRememberMeChecked: boolean
}

@ObjectType()
export class LoginOutput {
  @Field(() => String)
  public accessToken: string

  @Field(() => String)
  public refreshToken: string
}
