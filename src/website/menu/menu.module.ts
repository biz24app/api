import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Menu } from './entities/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { Site } from '../site/entities/site.entity';

@Module({
  controllers: [MenuController],
  providers: [MenuService],
  imports: [
    TypeOrmModule.forFeature([Menu]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '70s' },
    }),
    TypeOrmModule.forFeature([Site]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '70s' },
    })
  ],
})
export class MenuModule { }
