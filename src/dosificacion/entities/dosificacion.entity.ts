import { ApiProperty } from "@nestjs/swagger";
import { Lote } from "src/lote/entities/lote.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'dosificacion' })
export class Dosificacion {

    @ApiProperty({
        example: '9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description: 'Aimentacion ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'Formula 1',
        description: 'Nombre de la dieta',
    })
    @Column()
    dieta: string;

    @ApiProperty({
        example: '06/02/2023',
        description: 'Fecha de inicio de la alimentación',
    })
    @Column()
    fechaInicio: string;

    @ApiProperty({
        example: '06/03/2023',
        description: 'Fecha final de la alimentación',
    })
    @Column()
    fechaFinal: string;

    @ApiProperty({
        example: '200',
        description: 'Peso de alimentación en kilogramos',
    })
    @Column({
        type:'float'
    })
    pesoVivoKg: number;

    @ApiProperty({
        example: '2000',
        description: 'Costo de dosificacion total',
    })
    @Column({
        type:'float'
    })
    costoDosificacion: number;

    @Column()
    loteId: string;

    @ManyToOne(() => Lote, lote => lote.dosificacion)
    lote: Lote;


}
