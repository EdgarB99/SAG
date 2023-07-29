import { ApiProperty } from "@nestjs/swagger";
import { Alimentacion } from "src/alimentacion/entities/alimentacion.entity";
import { Auth } from "src/auth/entities/auth.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'alimentos'})
export class Alimento {
    
    @ApiProperty({
        example: '9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description: 'Alimento ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @ApiProperty({
        example: 'Maiz',
        description: 'Nombre del alimento ',
        uniqueItems: true
    })
    @Column()
    nombreAlimento:string;

    @ApiProperty({
        example: 'Ensilaje',
        description: 'Tipo de alimento'
    })
    @Column()
    tipo:string;

    @ApiProperty({
        example: '12.30',
        description: 'Precio por kilogramo del alimento'
    })
    @Column()
    precio:number;

    @ApiProperty({
        example:'9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description:'Usuario ID',
    })
    @Column()
    usuarioId:string;

    
    // @OneToMany( () => Alimentacion , alimentacion => alimentacion.alimento)
    // @ApiProperty({type: () => Alimentacion})
    // alimentacion: Alimentacion[];


    // @ManyToOne( () => Auth , auth => auth.alimentos)
    // usuario: Auth;

}
