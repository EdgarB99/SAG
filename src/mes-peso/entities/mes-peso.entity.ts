import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Vaca } from '../../vacas/entities/vaca.entity';

@Entity({name: 'pesos'})
export class MesPeso {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    dia:string;
    @Column()
    kg:number;
    @Column()
    lb:number;
    @Column()
    vacaId:string;

}

