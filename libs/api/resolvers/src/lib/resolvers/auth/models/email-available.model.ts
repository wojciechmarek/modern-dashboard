import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class EmailAvailableInput {
  @Field(() => String, { nullable: false })
  public email: string;
}

@ObjectType()
export class EmailAvailableOutput {
  @Field(() => Boolean)
  public isEmailAvailable: boolean;
}
