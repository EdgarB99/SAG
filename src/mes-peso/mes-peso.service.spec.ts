import { Test, TestingModule } from '@nestjs/testing';
import { MesPesoService } from './mes-peso.service';

describe('MesPesoService', () => {
  let service: MesPesoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MesPesoService],
    }).compile();

    service = module.get<MesPesoService>(MesPesoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
