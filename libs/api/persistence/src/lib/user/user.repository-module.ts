import { Module } from "@nestjs/common";
import { UserRepoProvider } from "./user.persistence-provider";

@Module({
  providers: [UserRepoProvider],
  exports: [UserRepoProvider]
})
export class UserRepositoryModule {}