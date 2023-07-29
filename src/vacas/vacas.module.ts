import { Module } from '@nestjs/common';
import { VacasService } from './vacas.service';
import { VacasController } from './vacas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaca } from './entities/vaca.entity';
import { AuthModule } from '../auth/auth.module';
import { LoteModule } from '../lote/lote.module';
import { MesPesoModule } from '../mes-peso/mes-peso.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vaca]), AuthModule, LoteModule],
  controllers: [VacasController],
  providers: [VacasService],
  exports:[VacasService]
})
export class VacasModule {}
