import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, Min, IsNumber, IsUUID } from 'class-validator';
export class CreateVentaDto {
    
    @ApiProperty({
        default:'12.00', 
        description: 'Precio del peso por kilogramo',
        nullable:false,
        
    })
    @IsNumber()
    @Min(5)
    precioKg:number;

    @ApiProperty({
        default:'1200', 
        description: 'Precio total del lote',
        nullable:false,
        
    })
    @IsNumber()
    @Min(5)
    precioTotal:number;

    @ApiProperty({
        default:'01-01-2023', 
        description: 'Fecha en la que se efectuó la venta',
        nullable:false,
        
    })
    @IsString()
    @MinLength(5)
    fechaVenta:string;

    
  
}
