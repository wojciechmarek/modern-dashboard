import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('access-tokens')
export class AccessTokenEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  userId: string;

  @Column()
  token: string;
}
