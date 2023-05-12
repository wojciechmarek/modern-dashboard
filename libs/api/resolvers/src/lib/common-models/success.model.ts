import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SuccessOutput {
  constructor(isSuccess: boolean) {
    this.isSuccess = isSuccess;
  }

  @Field(() => Boolean)
  public isSuccess: boolean;
}
