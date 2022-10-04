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

  async signUp(userDto: CreateUserDto) {
    userDto.url = `https://${userDto.phone}.biz24.app`;
    return this.usersService.create(userDto).then(res => {
      return res;
    }).catch(error => {
      return { error: `${error}` };;
    });
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

  async sendOTP(username: string, phone: string){
    const user = await this.usersService.findUserbyUserNameOrPhone(username, phone);
    if (!user) {
      throw new UnauthorizedException("Please enter correct information");
    }

    if(user.isActive==false) throw new UnauthorizedException("This user is disable. Please contact to administrator");

    // OTP send to user email or phone

    return {
      message: "OTP send to user email or phone"
    };
  }

  async verifyOTP(username: string, phone: string, otp: string){
    const user = await this.usersService.findUserbyUserNameOrPhone(username, phone);
    if (!user) {
      throw new UnauthorizedException("Please enter correct information");
    }

    if(user.isActive==false) throw new UnauthorizedException("This user is disable. Please contact to administrator");

    // verify OTP
    let isOTP: boolean;

    if(isOTP==false) throw new UnauthorizedException("OTP does not match please try again");

    return {
      message: "Now change your password"
    };
  }

  async changepassword(username: string, phone: string, otp: string,password: string){
    const user = await this.usersService.findUserbyUserNameOrPhone(username, phone);
    if (!user) {
      throw new UnauthorizedException("Please enter correct information");
    }

    if(user.isActive==false) throw new UnauthorizedException("This user is disable. Please contact to administrator");

    // verify OTP
    let isOTP: boolean;

    if(isOTP==false) throw new UnauthorizedException("OTP does not match please try again");

    user.password=password;
    user.updatedOn = 'NOW()';
    return await this.usersService.update(user.id, user);
  }

}