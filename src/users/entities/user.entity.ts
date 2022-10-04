import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  userName: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  url: string;

  @Column()
  email: string;

  @Column()
  otp: string;

  @Column({ type: 'datetime',default: () => 'NOW()' })
  createdOn: string;

  @Column({ type: 'datetime',default: () => 'CURRENT_TIMESTAMP' })
  updatedOn: string;

  @Column({ default: true })
  isActive: boolean;
}
