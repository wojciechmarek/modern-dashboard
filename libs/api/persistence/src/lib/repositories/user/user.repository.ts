import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities';
import { IUserRepository } from '../../interfaces';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) {}

  public async create(newUser: string): Promise<string> {
    const newUserEntity = new UserEntity();

    console.log("newUserEntity: ", newUserEntity);
    

    newUserEntity.email = "form.name;"
    newUserEntity.password = "password " + newUser;

    const insertedUser = await this.userRepository.insert(newUserEntity);
    return insertedUser.raw.insertedId.toString();
    return "newUserEntity";
  }
}
