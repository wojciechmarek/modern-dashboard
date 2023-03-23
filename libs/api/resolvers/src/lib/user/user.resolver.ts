import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class UserResolver {

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}