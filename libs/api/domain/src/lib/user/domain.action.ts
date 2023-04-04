import { IUserRepository } from '@md/api/interfaces';
import { Inject, Injectable } from '@nestjs/common';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class DomainService {
  constructor(@UserRepo() private readonly userRepo: IUserRepository) {}
}
