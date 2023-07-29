import { IsString, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class LoginUsuarioDto{
    
    @ApiProperty({
        default:'ejemplo@gmail.com', 
        description: 'email del usuario',
        nullable:false,
        required:true
    })
    @IsString()
    email:string;
    
    @ApiProperty({
        default:'Abc123', 
        description: 'Contraseña del usuario',
        nullable:false,
        minLength:6,
        required:true
    })
    @IsString()
    @MinLength(6)
    password:string;
}