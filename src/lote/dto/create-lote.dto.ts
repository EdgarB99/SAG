
import { IsString, MinLength,MaxLength, IsUUID } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateLoteDto {

    @ApiProperty({
        default:'Lote 01', 
        description: 'Nombre del lote',
        nullable:false,
        minLength:3,
        
    })
    @IsString()
    @MinLength(3)
    nombreLote:string;

    @ApiProperty({
        default:'Este lote esta conformado por vacas x y vacas y', 
        description: 'Descripción del lote',
        nullable:false,
        minLength:4,
    })
    @IsString()
    @MinLength(4)
    descripcion:string;

    @ApiProperty({
        default:'Mensual', 
        description: 'Tiempo del lote',
        nullable:false,
        minLength:4,
    })
    @IsString()
    @MinLength(4)
    periodo:string;

    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Usuario ID',
        nullable:false,
    })
    @IsString()
    @IsUUID()
    usuarioId:string;
}
