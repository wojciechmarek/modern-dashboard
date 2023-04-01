import { Args, Query, Resolver } from "@nestjs/graphql";
import { LoginInput, LoginOutput } from "../../models";

@Resolver()
export class AuthResolver {

  @Query(() => LoginOutput)
  login(@Args('data') data: LoginInput): LoginOutput {
    const response = new LoginOutput();

    response.accessToken = 'access' + data.username;
    response.refreshToken = 'refresh' + data.password;

    return response;
  }
}
