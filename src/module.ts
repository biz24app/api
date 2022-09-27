import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AppController } from './controller';
import { AppService } from './service';
import { UsersModule } from './users/users.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'a2nlmysql53plsk.secureserver.net',
      port: 3306,
      username: 'biz24_user',
      password: 'Pwd@user321',
      database: 'ph19844638281_biz24',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }), 
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [UsersModule]
})
export class AppModule {}
