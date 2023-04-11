import { Field, InputType, ObjectType } from '@nestjs/graphql'

@InputType()
export class RefreshSessionInput {
  @Field(() => String, { nullable: false })
  public refreshToken: string
}

@ObjectType()
export class RefreshSessionOutput {
  @Field(() => String)
  public accessToken: string

  @Field(() => String)
  public refreshToken: string
}
