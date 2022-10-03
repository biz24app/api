import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto): User {

    const isUser = this.usersRepository.findOne({
      where: {
        userName: createUserDto.userName,
      },
    });
    if(isUser) throw new Error("Duplicate Email");
    const user = this.usersRepository.create(createUserDto);
    this.usersRepository.save(createUserDto);
    return user;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  findUser(username: string, password: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        userName: username,
        password: password
      },
    });
  }

  update(id: number, data: Partial<UpdateUserDto>) {
    this.usersRepository.update({ id }, data);
    return this.usersRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number): string {
    this.usersRepository.delete(id);
    return 'success';
  }
}
