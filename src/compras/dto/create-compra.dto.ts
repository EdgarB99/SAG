import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID, Min, MinLength } from "class-validator";

export class CreateCompraDto {
    @ApiProperty({
        default:'Maiz', 
        description: 'Concepto de la compra',
        nullable:false,
        minLength:1,
        required:true
    })
    @IsString()
    @MinLength(1)
    concepto:string;

    @ApiProperty({
        default:'03/04/2023', 
        description: 'Fecha en la que se registra la compra',
        nullable:false,
        minLength:1,
        required:true
    })
    @IsString()
    @MinLength(1)
    fecha:string;
   
    @ApiProperty({
        default:'Mensual', 
        description: 'Periodo en el que se vuelve a realizar la compra',
        nullable:false,
        minLength:1,
        required:true
    })
    @IsString()
    @MinLength(1)
    periodo:string;

    @ApiProperty({
        default:'Alimento', 
        description: 'Tipo de cocepto',
        nullable:false,
        minLength:1,
        required:true
    })
    @IsString()
    @MinLength(1)
    tipo:string;

    @ApiProperty({
        default:'500', 
        description: 'Cantidad en kg del producto',
        nullable:false,
        required:true
    })
    @IsNumber()
    cantidad:number;

    @ApiProperty({
        default:'13.00', 
        description: 'Precio total de la compra',
        nullable:false,
        required:true
    })
    @IsNumber()
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
