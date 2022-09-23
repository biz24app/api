import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.usersService.findOne(username);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return null;
  }

  async login(username: string, pass: string) {
    const user = await this.usersService.findUser(username,pass);
    if (!user) {
      throw new UnauthorizedException()
    }
      const payload = { username: user.userName, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
        url:"url"
      };
  }
}