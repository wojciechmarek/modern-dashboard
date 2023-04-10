import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { LoginUserQuery } from "./login-user.query";
import { UserRepository } from "@md/api/persistence";
import { Inject } from "@nestjs/common";

@QueryHandler(LoginUserQuery)
export class LoginUserQueryHandler implements IQueryHandler<LoginUserQuery> {

  constructor(private readonly userRepository: UserRepository) {}
  
  execute(command: LoginUserQuery): Promise<string> {
    console.log('CreateUserCommand...:', command);
    
    const result =  command.email + command.password + 'Hello World';

    this.userRepository.create(result);

    return Promise.resolve(result);
  }
}