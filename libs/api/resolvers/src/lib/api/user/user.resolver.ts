import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class UserResolver {
  @Query((returns) => String)
  users(): any {
    return 'Hello World!'
  }
}
