import { Module } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { MenuItemController } from './menu-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItem } from './entities/menu-item.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { Menu } from '../menu/entities/menu.entity';

@Module({
  controllers: [MenuItemController],
  providers: [MenuItemService],
  imports: [
    TypeOrmModule.forFeature([Menu]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([MenuItem]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class MenuItemModule { }
