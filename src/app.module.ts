import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestCrudModule } from './rest-crud/rest-crud.module';
import { TypeormCrudModule } from './typeorm-crud/typeorm-crud.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
    useFactory: async (config:ConfigService)=>{
    return {
      "type": "mysql",
      "host": config.get('MYSQL_URL'),
      "port": config.get('MYSQL_PORT'),
      "username": config.get('MYSQL_USER'),
      "password": config.get('MYSQL_PASSWD'),
      "database": config.get('MYSQL_DB'),
      // "entities": [
      //   "dist/src/entities/*.ts"
      // ],
      autoLoadEntities: true,
      "synchronize": config.get('MYSQL_ISSync')
    }
  },
  inject: [ConfigService],
  }),RestCrudModule, TypeormCrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
