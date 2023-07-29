import { Peso } from 'src/peso/entities/peso.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Lote } from '../../lote/entities/lote.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Venta } from 'src/ventas/entities/venta.entity';

@Entity({name: 'vacas'})
export class Vaca {
    @ApiProperty({
        example:'9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description:'Vaca ID',
    })
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty({
        example:'MX000012344321',
        description:'Arete alfanumerico de la vaca',
    })
    @Column()
    arete:string;

    
    @ApiProperty({
        example:'01-01-2020',
        description:'Fecha de nacimiento de la vaca',
    })
    @Column()
    fechaNacimiento:string;

    
    @ApiProperty({
        example:'01-02-2023',
        description:'Fecha en la que ingreso la vaca',
    })
    @Column()
    fechaIngreso:string;

    @ApiProperty({
        example:'Charolais',
        description:'Raza de la vaca',
    })
    @Column()
    raza:string;

    @ApiProperty({
        example:'false',
        description:'Es una bandera que se modificará al momento de hacer la venta de la vaca',
    })
    @Column({default:false})
    vendido:boolean;

    @ApiProperty({
        example:'false',
        description:'Es una bandera que se modificará al momento de hacer la eliminacion de la vaca',
    })
    @Column({default:false})
    eliminado:boolean;

    @ApiProperty({
        example:'9d645d50-addb-4a97-9f8e-85ff650b7fe8',
        description:'Lote ID',
    })
    @Column()
    loteId:string;
  
    @ManyToOne(()=> Lote, lote => lote.vacas)
    lote: Lote;
    
    @OneToMany(()=> Peso, peso => peso.vaca)
    @ApiProperty({type: () => Peso})
    peso: Peso[];

    @OneToOne(()=> Venta, venta => venta.vaca)
    @JoinColumn()
    @ApiProperty({type: () => Venta})
    venta: Venta;
       

}
