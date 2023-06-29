import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserInfoOutput {
  @Field(() => String)
  public id: string;

  @Field(() => String)
  public email: string;
}
