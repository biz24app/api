import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";


@Controller('v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private usersService: UsersService,
    ) {}

  @Get()
  get() {
    return "auth";
  }

  @UseGuards(LocalAuthGuard)
  @Post('signup')
  create(@Request() req) {
    var createUserDto: CreateUserDto = new CreateUserDto();
    createUserDto.firstName=req.body.firstName;
    createUserDto.lastName=req.body.lastName;
    createUserDto.password=req.body.password;
    createUserDto.userName=req.body.email;
    createUserDto.phone=req.body.phone;
    createUserDto.url = `${req.body.phone}.biz24.app`;
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  
  @Post('verify')
  async verify(@Request() req) {
    return this.authService.verify(req.headers.authorization);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body.userName,req.body.password);
  }
}
