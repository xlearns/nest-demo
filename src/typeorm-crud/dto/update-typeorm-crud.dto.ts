import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeormCrudDto } from './create-typeorm-crud.dto';

export class UpdateTypeormCrudDto extends PartialType(CreateTypeormCrudDto) {}
