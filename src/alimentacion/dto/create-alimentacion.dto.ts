import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsUUID, IsNumber } from 'class-validator';
export class CreateAlimentacionDto {

    @ApiProperty({
        default:'01-01-2023', 
        description: 'Fecha de inicio de la alimentación',
        nullable:false,
        required:true
    })
    @IsString()
    fechaInicio:string;

    @ApiProperty({
        default:'10-01-2023', 
        description: 'Fecha de inicio de la alimentación',
        nullable:false,
        required:true
    })
    @IsString()
    fechaFinal:string;

    @ApiProperty({
        default:'150', 
        description: 'Cantidad de la alimentación en kilogramos',
        nullable:false,
        required:true
    })
    @IsNumber()
    kgAlimentacion:number;

    
    @ApiProperty({
        default:'320', 
        description: 'Cantidad de la alimentación en libras',
        nullable:false,
        required:true
    })
    @IsNumber()
    lbAlimentacion:number;

    
    @ApiProperty({
        default:'150', 
        description: 'Cantidad de la alimentación en kilogramos',
        nullable:false,
        required:true
    })
    @IsNumber()
    costoAlimentacionDia:number;

    
    @ApiProperty({
        default:'150', 
        description: 'Cantidad de la alimentación en kilogramos',
        nullable:false,
        required:true
    })
    @IsNumber()
    costoAlimentacionTotal:number;

    @ApiProperty({
        default:'550', 
        description: 'Peso total del lote',
        nullable:false,
        required:true
    })
    @IsNumber()
    pesoTotalLote:number;

    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Lote ID',
        nullable:false,
    })
    @IsString()
    @IsUUID()
    loteId:string;

    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Alimento ID',
        nullable:false,
    })
    @IsString()
    @IsUUID()
    alimentoId:string;


}
