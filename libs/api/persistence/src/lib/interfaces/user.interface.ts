export interface IUserRepository {
  create(newUser: string): Promise<string>;
}