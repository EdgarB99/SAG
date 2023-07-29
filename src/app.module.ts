import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VacasModule } from './vacas/vacas.module';
import { LoteModule } from './lote/lote.module';
import { Auth } from './auth/entities/auth.entity';
import { Vaca } from './vacas/entities/vaca.entity';
import { Lote } from './lote/entities/lote.entity';
import { AlimentoModule } from './alimento/alimento.module';
import { PesoModule } from './peso/peso.module';
import { AlimentacionModule } from './alimentacion/alimentacion.module';
import { VentasModule } from './ventas/ventas.module';
import { Peso } from './peso/entities/peso.entity';
import { Alimento } from './alimento/entities/alimento.entity';
import { Alimentacion } from './alimentacion/entities/alimentacion.entity';
import { Venta } from './ventas/entities/venta.entity';
import { ComprasModule } from './compras/compras.module';
import { DietasModule } from './dietas/dietas.module';
import { Dieta } from './dietas/entities/dieta.entity';
import { Compra } from './compras/entities/compra.entity';
import { DosificacionModule } from './dosificacion/dosificacion.module';
import { ContenidoDietaModule } from './contenido-dieta/contenido-dieta.module';
import { Dosificacion } from './dosificacion/entities/dosificacion.entity';
import { ContenidoDieta } from './contenido-dieta/entities/contenido-dieta.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'ganaderiadb',
      entities: [Auth, Vaca, Lote, Peso, Venta, Dieta, Compra, Dosificacion, ContenidoDieta],
      synchronize: true,
    }),
 
    AuthModule,
    VacasModule,
    LoteModule,
    AlimentoModule,
    PesoModule,
    AlimentacionModule,
    VentasModule,
    ComprasModule,
    DietasModule,
    DosificacionModule,
    ContenidoDietaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
