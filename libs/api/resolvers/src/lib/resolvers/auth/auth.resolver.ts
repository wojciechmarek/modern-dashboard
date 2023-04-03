import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput, LoginOutput } from '../../models';
import { Observable, of } from 'rxjs';

@Resolver()
export class AuthResolver {
  @Mutation(() => LoginOutput)
  login(@Args('data') data: LoginInput ): Observable<LoginOutput> {
    console.log('Logging in....:', data);

    const response = new LoginOutput();
    response.accessToken = 'access' + Math.random() * 1234;
    response.refreshToken = 'refresh' + Math.random() * 1234;


    return of(response);
  }

  // @Query(() => LoginOutput)
  // register(@Args('data') data: LoginInput): LoginOutput {
  //   const response = new LoginOutput();

  //   console.log('Registering....', data);

  //   response.accessToken = 'access' + data.email;
  //   response.refreshToken = 'refresh' + data.password;

  //   return response;
  // }

  // @Query()
  // logout(@Args('data') data: LoginInput) {
  //   console.log('Logging out....', data);
  // }
}
