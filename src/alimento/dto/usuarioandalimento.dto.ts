import { IsString, IsUUID } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UsuarioAndAlimento{

    
    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Usuario ID',
        nullable:false,
    })
    @IsString()
    id:string;

    @ApiProperty({
        default:'Paja', 
        description: 'Nombre del alimento',
        nullable:false,
        minLength:1,
        required:true
    })
    @IsString()
    nombreAlimento:string;
}