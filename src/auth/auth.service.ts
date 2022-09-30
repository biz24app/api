import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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

  async login(username: string, pass: string) {
    const user = await this.usersService.findUser(username, pass);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload  = { username: user.userName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload,{
        secret: jwtConstants.secret,
        expiresIn: jwtConstants.expiresIn
      }),
      url: "url"
    };
  }
}