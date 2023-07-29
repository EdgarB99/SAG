import { IsString, MinLength,MaxLength, IsUUID, IsNumber, Min, IsBoolean } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateVacaDto {
    @ApiProperty({
        default:'  MX000012344321', 
        description: 'Arete de la vaca',
        nullable:false,
        minLength:4,
        required:true
    })
    @IsString()
    @MinLength(4)
    arete:string;
    
    @ApiProperty({
        default:'  01-01-2020', 
        description: 'Fecha de nacimiento de la vaca',
        nullable:false,
        minLength:8,
        required:true
    })
    @IsString()
    fechaNacimiento:string;
    @IsString()

    @ApiProperty({
        default:'  01-01-2023', 
        description: 'Fecha de ingreso de la vaca',
        nullable:false,
        minLength:8,
        required:true
    })
    fechaIngreso:string;

    
    @ApiProperty({
        default:'Charolais', 
        description: 'Raza de la vaca',
        nullable:false,
    })
    @IsString()
    raza:string;

    @ApiProperty({
        default:'false', 
        description: 'Bandera para venta',
        nullable:false,
    })
    @IsBoolean()
    vendido:boolean;

    
    @ApiProperty({
        default:'false', 
        description: 'Bandera para eliminacion',
        nullable:false,
    })
    @IsBoolean()
    eliminado:boolean;

    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Lote ID',
        nullable:false,
    })
    @IsString()
    @IsUUID()
    loteId:string;

  
}
