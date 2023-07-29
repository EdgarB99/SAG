import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID, MinLength } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateDietaDto {

    @ApiProperty({
        example: 'Formula 1',
        description: 'Fecha de inicio de la alimentación',
    })
    @IsString()
    @Column()
    nombreDieta:string;

    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Usuario ID',
        nullable:false,
        required:true
    })
    @IsUUID()
    @IsString()
    @MinLength(1)
    usuarioId:string;

}
