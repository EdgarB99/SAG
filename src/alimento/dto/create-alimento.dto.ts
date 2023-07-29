import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength, Min, IsNumber, IsUUID } from 'class-validator';

export class CreateAlimentoDto {
    @ApiProperty({
        default:'Maiz', 
        description: 'Nombre del alimento',
        nullable:false,
        minLength:1,
        required:true
    })
    @IsString()
    @MinLength(1)
    nombreAlimento:string;
    
    @ApiProperty({
        default:'Ensilaje', 
        description: 'Tipo de alimento',
        nullable:false,
        minLength:1,
        required:true
    })
    @IsString()
    @MinLength(1)
    tipo:string;

    @ApiProperty({
        default:'13.00', 
        description: 'Precio del alimento',
        nullable:false,
        required:true
    })
    @IsNumber()
    @Min(3)
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
    usuarioId:string;


}
