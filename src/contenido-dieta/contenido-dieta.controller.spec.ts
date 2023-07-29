import { Test, TestingModule } from '@nestjs/testing';
import { ContenidoDietaController } from './contenido-dieta.controller';
import { ContenidoDietaService } from './contenido-dieta.service';

describe('ContenidoDietaController', () => {
  let controller: ContenidoDietaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContenidoDietaController],
      providers: [ContenidoDietaService],
    }).compile();

    controller = module.get<ContenidoDietaController>(ContenidoDietaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
