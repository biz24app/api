import { Module } from '@nestjs/common';
import { LayoutBlockService } from './layout-block.service';
import { LayoutBlockController } from './layout-block.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LayoutBlock } from './entities/layout-block.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';

@Module({
  controllers: [LayoutBlockController],
  providers: [LayoutBlockService],
  imports: [TypeOrmModule.forFeature([LayoutBlock]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),]
})
export class LayoutBlockModule { }
