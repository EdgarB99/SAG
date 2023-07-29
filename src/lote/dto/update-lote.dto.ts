import { IsString, MinLength, IsUUID, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLoteDto {

    @ApiProperty({
        default:'Lote 01', 
        description: 'Nombre del lote',
        nullable:false,
        minLength:3,
        
    })
    @IsString()
    @MinLength(3)
    @IsOptional()
    nombreLote?:string;

    @ApiProperty({
        default:'Mensual', 
        description: 'Tiempo del lote',
        nullable:false,
        minLength:4,
    })
    @IsString()
    @MinLength(4)
    periodo?:string;

    @ApiProperty({
        default:'Este lote esta conformado por vacas x y vacas y', 
        description: 'Descripción del lote',
        nullable:false,
        minLength:4,
    })
    @IsString()
    @MinLength(4)
    @IsOptional()
    descripcion?:string;

    
    @ApiProperty({
        default:'Este lote esta conformado por vacas x y vacas y', 
        description: 'Descripción del lote',
        nullable:false,
        minLength:4,
    })
    @IsString()
    @IsOptional()
    usuarioId:string;



}
