import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: User): string {
    this.usersRepository.create(createUserDto);
    return 'success';
  }

  findAll(): Promise<User[]> {
    return this.findAll();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }

  update(id: number, UpdateUserDto: User): string {
    this.usersRepository.update(id, UpdateUserDto);
    return 'success';
  }

  remove(id: number): string {
    this.usersRepository.delete(id);
    return 'success';
  }
}
