import { Module } from '@nestjs/common';
import { DietasService } from './dietas.service';
import { DietasController } from './dietas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dieta } from './entities/dieta.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Dieta]), AuthModule ],
  controllers: [DietasController],
  providers: [DietasService],
  exports:[DietasService]
})
export class DietasModule {}
