import { Test, TestingModule } from '@nestjs/testing';
import { TypeormCrudService } from './typeorm-crud.service';

describe('TypeormCrudService', () => {
  let service: TypeormCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeormCrudService],
    }).compile();

    service = module.get<TypeormCrudService>(TypeormCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
