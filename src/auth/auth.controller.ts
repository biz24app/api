import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";


@Controller('v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
    ) {}

  @Get()
  get() {
    return "auth";
  }

  @UseGuards(LocalAuthGuard)
  @Post('sendotp')
  forgotpassword(@Request() req) {
    const { email, phone } = req.body;
    return this.authService.sendOTP(email,phone);
  }

  @UseGuards(LocalAuthGuard)
  @Post('verifyotp')
  forgotpasswordfinal(@Request() req) {
    const { email, phone, otp } = req.body;
    return this.authService.verifyOTP(email,phone,otp);
  }

  @UseGuards(LocalAuthGuard)
  @Post('changepassword')
  changepassword(@Request() req) {
    const { email, phone, otp,password } = req.body;
    return this.authService.changepassword(email,phone,otp,password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signup')
  create(@Request() req) {
    const { firstName,lastName,email, phone,password } = req.body;

    var createUserDto: CreateUserDto = new CreateUserDto();
    createUserDto.firstName=firstName;
    createUserDto.lastName=lastName;
    createUserDto.password=password;
    createUserDto.userName=email;
    createUserDto.phone=phone;
    return this.authService.signUp(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('verifysignup')
  verifySignUp(@Request() req) {
    const { email, phone, otp } = req.body;
    return this.authService.verifyOTP(email,phone,otp);
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
    const { userName,password } = req.body;
    return this.authService.login(userName,password);
  }
}
