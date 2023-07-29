import { Test, TestingModule } from '@nestjs/testing';
import { ContenidoDietaService } from './contenido-dieta.service';

describe('ContenidoDietaService', () => {
  let service: ContenidoDietaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContenidoDietaService],
    }).compile();

    service = module.get<ContenidoDietaService>(ContenidoDietaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
