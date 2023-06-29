import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  email: string;

  @Column()
  password: string;
}
