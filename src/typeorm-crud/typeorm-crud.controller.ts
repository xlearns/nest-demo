import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeormCrudService } from './typeorm-crud.service';
import { CreateTypeormCrudDto } from './dto/create-typeorm-crud.dto';
import { UpdateTypeormCrudDto } from './dto/update-typeorm-crud.dto';
import {User} from '../entities/User'

@Controller('typeorm-crud')
export class TypeormCrudController {
  constructor(private readonly typeormCrudService: TypeormCrudService) {}

  @Post()
  async create(@Body() data: User) {
    await this.typeormCrudService.create(data);
    return { code: 200, message: '创建成功' };
  }

  @Get()
  findAll() {
    return this.typeormCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeormCrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeormCrudDto: User) {
    return this.typeormCrudService.update(+id, updateTypeormCrudDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.typeormCrudService.remove(id);
    return { code: 200, message: '删除成功' };
  }
}
