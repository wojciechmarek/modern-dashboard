import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('clients')
export class ClientEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;
}
