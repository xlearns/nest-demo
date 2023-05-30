import { Module } from '@nestjs/common';
import { TypeormCrudService } from './typeorm-crud.service';
import { TypeormCrudController } from './typeorm-crud.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "../entities/User"

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [TypeormCrudController],
  providers: [TypeormCrudService]
})
export class TypeormCrudModule {}
