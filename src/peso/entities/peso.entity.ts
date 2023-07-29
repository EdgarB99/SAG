import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { Vaca } from '../../vacas/entities/vaca.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity({name:'pesos'})
export class Peso {

    @ApiProperty({
        example:'9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description:'Peso ID',
    })
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @ApiProperty({
        example:'02-02-2023',
        description:'Día en el que se registró el peso',
    })
    @Column()
    dia:string;

    
    @ApiProperty({
        example:'300',
        description:'Peso en Kilogramos',
    })
    @Column()
    kg:number;

    
    @ApiProperty({
        example:'300',
        description:'Peso en libras',
    })
    @Column()
    lb:number;

    @ApiProperty({
        example:'9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description:'Vaca ID',
    })
    @Column()
    vacaId:string;
    
    @ManyToOne( () => Vaca , vaca => vaca.peso)
    vaca: Vaca;
}
