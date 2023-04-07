import { IUserRepository } from "@md/api/interfaces";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository implements IUserRepository {
  
  public async Create(newUser: string): Promise<string> {
    return 'Created user: ' + newUser;
  }
}