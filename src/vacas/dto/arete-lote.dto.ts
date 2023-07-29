import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class LoteAndArete{
    @ApiProperty({
        default:'9d645d50-addb-4a97-9f8e-85ff650b7fe8', 
        description: 'Lote ID',
        nullable:false,
    })
    @IsString()
    id:string;

    
    @ApiProperty({
        default:'  MX000012344321', 
        description: 'Arete de la vaca',
        nullable:false,
        minLength:1,
        required:true
    })
    @IsString()
    arete:string;
}