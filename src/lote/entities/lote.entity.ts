import { ApiProperty } from "@nestjs/swagger";
import { Alimentacion } from "src/alimentacion/entities/alimentacion.entity";
import { Auth } from "src/auth/entities/auth.entity";
import { Dosificacion } from "src/dosificacion/entities/dosificacion.entity";
import { Vaca } from "src/vacas/entities/vaca.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';

@Entity({name: 'lotes'})
export class Lote {

    @ApiProperty({
        example:'9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description:'Lote ID',
        uniqueItems:true
    })
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @ApiProperty({
        example:'Lote 01',
        description:'Nombre del lote',
    })
    @Column()
    nombreLote:string;

    @ApiProperty({
        example:'Este lote esta conformado por vacas x y vacas y',
        description:'Descripción del lote',
    })
    @Column()
    descripcion:string;

    @ApiProperty({
        example:'Mensual',
        description:'Tiempo del lote',
    })
    @Column()
    periodo:string;


    @ApiProperty({
        example:'9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description:'Usuario ID',
    })
    @Column()
    usuarioId:string; 
   
    @ManyToOne( () => Auth , auth => auth.lotes)
    usuario: Auth;
   
    @OneToMany( () => Vaca , vaca => vaca.lote)
    @ApiProperty({type: () => Vaca})
    vacas: Vaca[];

    @OneToMany( () => Dosificacion , dosificacion => dosificacion.lote)
    @ApiProperty({type: () => Dosificacion})
    dosificacion: Dosificacion[];

}
