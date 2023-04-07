import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('users')
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  email: string;

  @Column()
  password: string;
}