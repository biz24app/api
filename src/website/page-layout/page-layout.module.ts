import { Module } from '@nestjs/common';
import { PageLayoutService } from './page-layout.service';
import { PageLayoutController } from './page-layout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageLayout } from './entities/page-layout.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';

@Module({
  controllers: [PageLayoutController],
  providers: [PageLayoutService],
  imports: [TypeOrmModule.forFeature([PageLayout]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),]
})
export class PageLayoutModule { }
