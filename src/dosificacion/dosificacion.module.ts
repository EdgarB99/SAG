import { Module } from '@nestjs/common';
import { DosificacionService } from './dosificacion.service';
import { DosificacionController } from './dosificacion.controller';
import { Dosificacion } from './entities/dosificacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoteModule } from 'src/lote/lote.module';
import { DietasModule } from 'src/dietas/dietas.module';

@Module({
  imports: [LoteModule, DietasModule, TypeOrmModule.forFeature([Dosificacion]) ],
  controllers: [DosificacionController],
  providers: [DosificacionService]
})
export class DosificacionModule {}
