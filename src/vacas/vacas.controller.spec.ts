import { Test, TestingModule } from '@nestjs/testing';
import { VacasController } from './vacas.controller';
import { VacasService } from './vacas.service';

describe('VacasController', () => {
  let controller: VacasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VacasController],
      providers: [VacasService],
    }).compile();

    controller = module.get<VacasController>(VacasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
