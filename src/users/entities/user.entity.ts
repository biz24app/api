import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Index()
  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  url: string;

  @Column({default:new Date() })
  createdOn: string;

  @Column({default:new Date() })
  updatedOn: string;

  @Column({ default: true })
  isActive: boolean;
}
