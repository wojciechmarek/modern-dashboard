import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('configurations')
export class ConfigurationEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  userId: string;

  @Column()
  isActive: boolean;

  @Column()
  theme: string;

  @Column()
  language: string;
}
