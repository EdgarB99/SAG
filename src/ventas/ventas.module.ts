import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { Venta } from './entities/venta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoteModule } from 'src/lote/lote.module';
import { Lote } from 'src/lote/entities/lote.entity';
import { Vaca } from 'src/vacas/entities/vaca.entity';
import { VacasModule } from 'src/vacas/vacas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Venta, Vaca]), VacasModule],
  controllers: [VentasController],
  providers: [VentasService]
})
export class VentasModule {}
