import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Http2ServerResponse } from 'http2';
import { url } from 'inspector';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.usersService.findOne(username);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return null;
  }

  async verify(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

async signUp(userDto: CreateUserDto){
  try{
    userDto.url = `${userDto.phone}.biz24.app`;
  const user =  this.usersService.create(userDto);
  return user;
  } catch(e){
    return {error:`${userDto.userName} already exists`};
  }
}

  async login(username: string, pass: string) {
    const user = await this.usersService.findUser(username, pass);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload  = { firstName: user.firstName, lastName: user.lastName, userName: user.userName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload,{
        secret: jwtConstants.secret,
        expiresIn: jwtConstants.expiresIn
      }),
      expiresIn: jwtConstants.expiresIn,
      url: user.url
    };
  }
}