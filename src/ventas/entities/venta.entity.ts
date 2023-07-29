import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Vaca } from 'src/vacas/entities/vaca.entity';

@Entity({name:'ventas'})
export class Venta {

    @ApiProperty({
        example:'9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description:'Venta ID',
    })
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @ApiProperty({
        example:'22.00',
        description:'Precio por kilogramo de venta',
    })
    @Column()
    precioKg:number;
    
    @ApiProperty({
        example:'2200',
        description:'Precio total de la venta',
    })
    @Column()
    precioTotal:number;

    @ApiProperty({
        example:'22-02-2023',
        description:'Fecha en la que se realizó la venta',
    })
    @Column()
    fechaVenta:string;


    
    @OneToOne(()=>Vaca, vaca => vaca.venta)
    vaca:Vaca;
}
