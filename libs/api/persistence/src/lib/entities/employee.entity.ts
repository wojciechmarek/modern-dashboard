import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('employees')
export class EmployeeEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  userId: string;

  @Column()
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
}
