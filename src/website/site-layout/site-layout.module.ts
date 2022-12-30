import { Module } from '@nestjs/common';
import { SiteLayoutService } from './site-layout.service';
import { SiteLayoutController } from './site-layout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteLayout } from './entities/site-layout.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { LayoutService } from '../layout/layout.service';
import { Layout } from '../layout/entities/layout.entity';

@Module({
  controllers: [SiteLayoutController],
  providers: [
    SiteLayoutService,
    LayoutService
  ],
  imports: [TypeOrmModule.forFeature([SiteLayout]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),
  TypeOrmModule.forFeature([Layout]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),
],
})
export class SiteLayoutModule { }
