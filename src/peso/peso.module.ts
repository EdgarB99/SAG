import { Module } from '@nestjs/common';
import { PesoService } from './peso.service';
import { PesoController } from './peso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Peso } from './entities/peso.entity';
import { VacasModule } from '../vacas/vacas.module';

@Module({
  imports:[TypeOrmModule.forFeature([Peso]), VacasModule],
  controllers: [PesoController],
  providers: [PesoService]
})
export class PesoModule {}
