import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('refresh-tokens')
export class RefreshTokenEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  userId: string;

  @Column()
  token: string;
}
