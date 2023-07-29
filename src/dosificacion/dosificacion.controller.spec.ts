import { Test, TestingModule } from '@nestjs/testing';
import { DosificacionController } from './dosificacion.controller';
import { DosificacionService } from './dosificacion.service';

describe('DosificacionController', () => {
  let controller: DosificacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DosificacionController],
      providers: [DosificacionService],
    }).compile();

    controller = module.get<DosificacionController>(DosificacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
