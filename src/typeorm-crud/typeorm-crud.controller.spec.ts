import { Test, TestingModule } from '@nestjs/testing';
import { TypeormCrudController } from './typeorm-crud.controller';
import { TypeormCrudService } from './typeorm-crud.service';

describe('TypeormCrudController', () => {
  let controller: TypeormCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeormCrudController],
      providers: [TypeormCrudService],
    }).compile();

    controller = module.get<TypeormCrudController>(TypeormCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
