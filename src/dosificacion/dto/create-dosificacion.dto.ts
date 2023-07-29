import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateDosificacionDto {

    @ApiProperty({
        default:'Formula 1', 
        description: 'Nombre de la dieta',
        nullable:false,
        required:true
    })
    @IsString()
    dieta:string;

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
        default:'500', 
        description: 'Peso vivo en kg del porcentaje dado',
        nullable:false,
        required:true
    })
    @IsNumber()
    pesoVivoKg:number;

    
    @ApiProperty({
        default:'1500', 
        description: 'Precio de la dosificación',
        nullable:false,
        required:true
    })
    @IsNumber()
    costoDosificacion:number;

    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Lote ID',
        nullable:false,
    })
    @IsString()
    @IsUUID()
    loteId:string;



}
