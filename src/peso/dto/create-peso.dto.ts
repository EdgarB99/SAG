import { IsString, IsNumber, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePesoDto {
    @ApiProperty({
        default:'01-01-2023', 
        description: 'Fecha de registro del peso',
        nullable:false,
        required:true
    })
    @IsString()
    dia:string;

    @ApiProperty({
        default:'300', 
        description: 'Peso de la vaca en kilogramos',
        nullable:false,
        required:true
    })
    @IsNumber()
    kg:number;

    
    @ApiProperty({
        default:'300', 
        description: 'Peso de la vaca en libras',
        nullable:false,
        required:true
    })
    @IsNumber()
    lb:number;

    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Vaca ID',
        nullable:false,
    })
    @IsString()
    @IsUUID()
    vacaId:string;
}
