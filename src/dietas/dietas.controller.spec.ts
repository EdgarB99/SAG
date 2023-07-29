import { Test, TestingModule } from '@nestjs/testing';
import { DietasController } from './dietas.controller';
import { DietasService } from './dietas.service';

describe('DietasController', () => {
  let controller: DietasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DietasController],
      providers: [DietasService],
    }).compile();

    controller = module.get<DietasController>(DietasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
