import { Test, TestingModule } from '@nestjs/testing';
import { PesoController } from './peso.controller';
import { PesoService } from './peso.service';

describe('PesoController', () => {
  let controller: PesoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PesoController],
      providers: [PesoService],
    }).compile();

    controller = module.get<PesoController>(PesoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
