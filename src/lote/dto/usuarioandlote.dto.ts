import { IsString, IsUUID } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UsuarioAndLote{
    
    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Usuario ID',
        nullable:false,
    })
    @IsString()
    id:string;

    @ApiProperty({
        default:'Lote ID', 
        description: 'Nombre del lote',
        nullable:false,   
    })
    @IsString()
    nombreLote:string;
}