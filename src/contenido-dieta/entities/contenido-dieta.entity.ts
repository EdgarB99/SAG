import { ApiProperty } from '@nestjs/swagger';
import { Dieta } from 'src/dietas/entities/dieta.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contenido_dieta'})
export class ContenidoDieta {
  @ApiProperty({
    example: '9d645d50-addb-4a97-9f8e-85ff650b7fe8',
    description: 'contenidoDieta ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Maiz',
    description: 'Nombre del alimento',
  })
  @Column()
  nombreAlimento: string;

  @ApiProperty({
    example: '50',
    description: 'Porcentaje del alimento',
  })
  @Column({
    type: 'float',
  })
  porcentaje: number;

  @ApiProperty({
    example: '10',
    description: 'Precio del alimento',
  })
  @Column({
    type: 'float',
  })
  precio: number;

  @ApiProperty({
    example: '9d645d50-addb-4a97-9f8e-85ff650b7fe8',
    description: 'Dieta ID',
    uniqueItems: true,
  })
  @Column('uuid')
  dietaId: string;

  @ManyToOne(() => Dieta, (dieta) => dieta.contenidoDieta)
  dieta: Dieta;
}
