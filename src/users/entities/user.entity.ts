import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  url: string;

  @Column({default:"now()" })
  createdOn: string;

  @Column({default:"now()" })
  updatedOn: string;

  @Column({ default: true })
  isActive: boolean;
}
