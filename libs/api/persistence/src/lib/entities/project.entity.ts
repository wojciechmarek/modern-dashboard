import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('projects')
export class ProjectEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  clientId: string;

  @Column()
  name: string;
}
