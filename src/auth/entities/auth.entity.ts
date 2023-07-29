import { ApiProperty } from '@nestjs/swagger';
import { Compra } from 'src/compras/entities/compra.entity';
import { Dieta } from 'src/dietas/entities/dieta.entity';
import { Lote } from 'src/lote/entities/lote.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Auth {
  @ApiProperty({
    example: 'string',
    description: 'Usuario ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Juan Manuel',
    description: 'Nombre(s) del usuario',
  })
  @Column()
  nombre: string;

  @ApiProperty({
    example: 'Lopez Peña',
    description: 'Apellido(s) del usuario',
  })
  @Column()
  apellidos: string;

  @ApiProperty({
    example: 'ejemplo@gmail.com',
    description: 'email del usuario',
  })
  @Column()
  email: string;

  @ApiProperty({
    example: '$2b$10$H1f3YPXa06oEmqupg3px.uASEpZ95dwcY88h5ntmlHDQ5Jb6dDOr6',
    description: 'Contraseña del usuario',
  })
  @Column()
  password: string;

  @OneToMany(() => Lote, (lote) => lote.usuario)
  @ApiProperty({ type: () => Lote })
  lotes: Lote[];

  @OneToMany(() => Dieta, (dieta) => dieta.usuario)
  @ApiProperty({ type: () => Dieta })
  dietas: Dieta[];

  @OneToMany(() => Compra, (compra) => compra.usuario)
  @ApiProperty({ type: () => Compra })
  compras: Compra[];
}
