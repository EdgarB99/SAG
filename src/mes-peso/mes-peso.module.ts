import { Module } from '@nestjs/common';
import { MesPesoService } from './mes-peso.service';
import { MesPesoController } from './mes-peso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesPeso } from './entities/mes-peso.entity';
import { VacasModule } from '../vacas/vacas.module';

@Module({
  imports:[TypeOrmModule.forFeature([MesPeso]), VacasModule],
  controllers: [MesPesoController],
  providers: [MesPesoService],
  exports:[MesPesoService]
})
export class MesPesoModule {}
