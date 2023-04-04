export interface IUserRepository {
  Create(newUser: string): Promise<string>;
}