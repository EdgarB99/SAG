import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'alimentacion'})
export class Alimentacion {

    @ApiProperty({
        example: '9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description: 'Aimentacion ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @ApiProperty({
        example: '06/02/2023',
        description: 'Fecha de inicio de la alimentación',
    })
    @Column()
    fechaInicio:string;

    @ApiProperty({
        example: '06/03/2023',
        description: 'Fecha final de la alimentación',
    })
    @Column()
    fechaFinal:string;

    @ApiProperty({
        example: '200',
        description: 'Peso de alimentación en kilogramos',
    })
    @Column()
    kgAlimentacion:number;

    @ApiProperty({
        example: '440',
        description: 'Peso de alimentación en libras',
    })
    @Column()
    lbAlimentacion:number;

    
    @ApiProperty({
        example: '2000',
        description: 'Costo de alimentación por día',
    })
    @Column()
    costoAlimentacionDia:number;

    @ApiProperty({
        example: '2000',
        description: 'Costo de alimentación total del periodo',
    })
    @Column()
    costoAlimentacionTotal:number;

    @ApiProperty({
        example: '2000',
        description: 'Peso del total del lote antes de iniciar la nueva alimentacion',
    })
    @Column()
    pesoTotalLote:number;

    @Column()
    loteId:string;

    @Column()
    alimentoId:string;
}
