import { Module } from '@nestjs/common';
import { PageSectionService } from './page-section.service';
import { PageSectionController } from './page-section.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageSection } from './entities/page-section.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';

@Module({
  controllers: [PageSectionController],
  providers: [PageSectionService],
  imports: [TypeOrmModule.forFeature([PageSection]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),]
})
export class PageSectionModule {}
