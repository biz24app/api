import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  get() {
    return "auth";
  }

  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body.userName,req.body.password);
  }
}
