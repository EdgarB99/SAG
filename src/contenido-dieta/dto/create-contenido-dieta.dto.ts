import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID, MinLength, IsNumber } from 'class-validator';
import { Column } from "typeorm";

export class CreateContenidoDietaDto {

    @ApiProperty({
        example: 'Maiz',
        description: 'Nombre del alimento',
    })
    @IsString()
    @Column()
    nombreAlimento:string;

    @ApiProperty({
        example: '20',
        description: 'Porcentaje del 1 al 100 del contenido del alimento',
    })
    @IsNumber()
    @Column({
        type:'float'
    })
    porcentaje:number;

    @ApiProperty({
        example: '100',
        description: 'Precio del alimento',
    })
    @IsNumber()
    @Column({
        type:'float'
    })
    precio:number;

    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Usuario ID',
        nullable:false,
        required:true
    })
    @IsUUID()
    @IsString()
    @MinLength(1)
    dietaId:string;
}
