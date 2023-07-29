import { Module } from '@nestjs/common';
import { AlimentoService } from './alimento.service';
import { AlimentoController } from './alimento.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Alimento } from './entities/alimento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Alimento]), AuthModule ],
  controllers: [AlimentoController],
  providers: [AlimentoService],
  exports:[AlimentoService]
})
export class AlimentoModule {}
