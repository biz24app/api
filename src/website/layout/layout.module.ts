import { Module } from '@nestjs/common';
import { LayoutService } from './layout.service';
import { LayoutController } from './layout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Layout } from './entities/layout.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';

@Module({
  controllers: [LayoutController],
  providers: [LayoutService],
  imports: [TypeOrmModule.forFeature([Layout]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),]
  
})
export class LayoutModule {}
