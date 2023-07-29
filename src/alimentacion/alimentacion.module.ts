import { Module } from '@nestjs/common';
import { AlimentacionService } from './alimentacion.service';
import { AlimentacionController } from './alimentacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimentacion } from './entities/alimentacion.entity';
import { LoteModule } from '../lote/lote.module';
import { AlimentoModule } from '../alimento/alimento.module';

@Module({
  imports: [TypeOrmModule.forFeature([Alimentacion]), LoteModule, AlimentoModule],
  controllers: [AlimentacionController],
  providers: [AlimentacionService]
})
export class AlimentacionModule {}
