import { Module } from '@nestjs/common';
import { SiteLayoutService } from './site-layout.service';
import { SiteLayoutController } from './site-layout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteLayout } from './entities/site-layout.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';

@Module({
  controllers: [SiteLayoutController],
  providers: [SiteLayoutService],
  imports: [TypeOrmModule.forFeature([SiteLayout]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
})
export class SiteLayoutModule { }
