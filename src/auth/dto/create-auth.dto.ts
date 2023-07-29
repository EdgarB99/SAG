import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength,MaxLength } from "class-validator";

export class CreateAuthDto {
    
    // Decorador ApiProperty para documentar los dto

    @ApiProperty({
        default:'Juan Manuel', 
        description: 'Nombre(s) del usuario',
        nullable:false,
        minLength:1,
        required:true
    })
    @IsString()
    @MinLength(1)
    nombre:string;
    
    @ApiProperty({
        default:'Lopez Peña', 
        description: 'Apellido(s) del usuario',
        nullable:false,
        minLength:1,
        required:true
    })
    @IsString()
    @MinLength(1)
    apellidos:string;
    
    @ApiProperty({
        default:'ejemplo@gmail.com', 
        description: 'email que tendra el usuario',
        nullable:false,
        required:true,
        uniqueItems:true
    })
    @IsString()
    @MinLength(1)
    email:string;
    
    @ApiProperty({
        default:'123456', 
        description: 'Contraseña del usuario',
        nullable:false,
        minLength:6
    })
    @IsString()
    @MinLength(6)
    password:string;


}
