import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService
    ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    try {
        request.user =  this.jwtService.verify(token);
        return true;
      } catch (e) {
        return false;
      }
  }
}
