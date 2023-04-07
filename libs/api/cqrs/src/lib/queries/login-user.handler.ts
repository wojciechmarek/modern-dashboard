import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { LoginUserQuery } from "./login-user.query";

@QueryHandler(LoginUserQuery)
export class LoginUserQueryHandler implements IQueryHandler<LoginUserQuery> {
  execute(command: LoginUserQuery): Promise<string> {
    console.log('CreateUserCommand...:', command);
    
    const result =  command.email + command.password + 'Hello World';

    return Promise.resolve(result);
    
  }
}