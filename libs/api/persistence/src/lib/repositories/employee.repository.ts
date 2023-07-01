import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity, UserEntity } from '../entities';

@Injectable()
export class EmployeeRepository {
  constructor(
  @InjectRepository(EmployeeEntity) private readonly employeeRepository: Repository<EmployeeEntity>
  ) {}

  public async create(newUser: string): Promise<string> {
    // const newUserEntity = new UserEntity();

    // console.log('newUserEntity: ', newUser);

    // newUserEntity.email = 'form.name;';
    // newUserEntity.password = 'password ' + newUser;

    // const insertedUser = await this.userRepository.insert(newUserEntity);
    // return insertedUser.raw.insertedId.toString();
  }
}
