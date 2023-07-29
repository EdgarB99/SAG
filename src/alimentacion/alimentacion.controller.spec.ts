import { Test, TestingModule } from '@nestjs/testing';
import { AlimentacionController } from './alimentacion.controller';
import { AlimentacionService } from './alimentacion.service';

describe('AlimentacionController', () => {
  let controller: AlimentacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlimentacionController],
      providers: [AlimentacionService],
    }).compile();

    controller = module.get<AlimentacionController>(AlimentacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
