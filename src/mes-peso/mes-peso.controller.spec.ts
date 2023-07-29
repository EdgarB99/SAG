import { Test, TestingModule } from '@nestjs/testing';
import { MesPesoController } from './mes-peso.controller';
import { MesPesoService } from './mes-peso.service';

describe('MesPesoController', () => {
  let controller: MesPesoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MesPesoController],
      providers: [MesPesoService],
    }).compile();

    controller = module.get<MesPesoController>(MesPesoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
