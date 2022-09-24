import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";


@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  get() {
    return "auth";
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
