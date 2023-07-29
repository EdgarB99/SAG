import { Module } from '@nestjs/common';
import { ContenidoDietaService } from './contenido-dieta.service';
import { ContenidoDietaController } from './contenido-dieta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidoDieta } from './entities/contenido-dieta.entity';
import { DietasModule } from 'src/dietas/dietas.module';

@Module({
  imports: [TypeOrmModule.forFeature([ContenidoDieta]), DietasModule ],
  controllers: [ContenidoDietaController],
  providers: [ContenidoDietaService]
})
export class ContenidoDietaModule {}
