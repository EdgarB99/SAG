import { ApiProperty } from '@nestjs/swagger';
import { Auth } from 'src/auth/entities/auth.entity';
import { ContenidoDieta } from 'src/contenido-dieta/entities/contenido-dieta.entity';
import { Dosificacion } from 'src/dosificacion/entities/dosificacion.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Entity,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'dietas' })
export class Dieta {
  @ApiProperty({
    example: '9d645d50-addb-4a97-9f8e-85ff650b7fe8',
    description: 'Dieta ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Formula 01',
    description: 'Nombre de la dieta',
    uniqueItems: true,
  })
  @Column()
  nombreDieta: string;

  @ApiProperty({
    example: '9d645d50-addb-4a97-9f8e-85ff650b7fe8',
    description: 'Usuario ID',
  })
  @Column()
  usuarioId: string;

  @OneToMany(() => ContenidoDieta, (contenido) => contenido.dieta)
  contenidoDieta: ContenidoDieta[];


  @ManyToOne(() => Auth, (auth) => auth.dietas)
  usuario: Auth;
}
