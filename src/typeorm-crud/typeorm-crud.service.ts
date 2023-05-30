import { HttpException, Injectable } from '@nestjs/common';
import { CreateTypeormCrudDto } from './dto/create-typeorm-crud.dto';
import { UpdateTypeormCrudDto } from './dto/update-typeorm-crud.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "../entities/User"

@Injectable()
export class TypeormCrudService {
  constructor( @InjectRepository(User) private readonly UserRepo: Repository<User>){}

  create(rep: User) {
      delete rep.id;
      return this.UserRepo.save(rep);
  }
  async remove(id: number) {
    await this.findOneById(id);
    this.UserRepo.delete(id);
  }
  findAll() {
    return this.UserRepo.find()
  }

  findOne(id: number) {
    return this.findOneById(id);
  }

  async update(id: number, data: User) {
    await this.findOneById(id);
    delete data.id;
    this.UserRepo.update(id, data);
  }

  private async findOneById(id: number): Promise<User> {
    const userInfo = await this.UserRepo.findOneById(id);
    if (!userInfo) {
        throw new HttpException(`指定 id=${id} 的USER不存在`, 404);
    }
    return userInfo;
  }
}
