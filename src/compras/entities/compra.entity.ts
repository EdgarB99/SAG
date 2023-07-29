import { ApiProperty } from "@nestjs/swagger";
import { Auth } from "src/auth/entities/auth.entity";
import { Dieta } from "src/dietas/entities/dieta.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'compras' })
export class Compra {

    @ApiProperty({
        example: '9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description: 'Compra ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty({
        example: 'Concepto',
        description: 'Nombre del concepto',
        uniqueItems: true
    })
    @Column()
    concepto: string;

    @ApiProperty({
        example:'02/02/2023',
        description:'Fecha en la que se registro la compra',
    })
    @Column()
    fecha:string;


    @ApiProperty({
        example:'Mensual',
        description:'Periodo en la que se renueva la compra',
    })
    @Column()
    periodo:string;

    
    @ApiProperty({
        example: 'Alimentacion/Costos Generales',
        description: 'Tipo de compra'
    })
    @Column()
    tipo: string;


    @ApiProperty({
        example: '1000',
        description: 'Cantidad de alimento comprado',
        uniqueItems: true
    })
    @Column({
        type: "float"
    })
    cantidad: number;


    @ApiProperty({
        example: '12.30',
        description: 'Precio por kilogramo del alimento'
    })
    @Column({
        type: "float"
    })
    precio: number;


    @ApiProperty({
        example: '9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description: 'Usuario ID',
    })
    @Column()
    usuarioId: string;


    @ManyToOne(() => Auth, auth => auth.compras)
    usuario: Auth;

}
