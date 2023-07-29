import { IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuthDto {
    
    @ApiProperty({
        default:'Juan Manuel', 
        description: 'Nombre(s) del usuario',
        nullable:false,
        minLength:1,
        
    })
    @IsString()
    @MinLength(1)
    @IsOptional()
    nombre?:string;

    @ApiProperty({
        default:'Lopez Peña', 
        description: 'Apellido(s) del usuario',
        nullable:false,
        minLength:1,
        
    })
    @IsString()
    @MinLength(1)
    @IsOptional()
    apellidos?:string;
    
    @ApiProperty({
        default:'ejemplo@gmail.com', 
        description: 'email que tendra el usuario',
        nullable:false,
        uniqueItems:true
    })
    @IsString()
    @MinLength(1)
    @IsOptional()
    email?:string;

    @ApiProperty({
        default:'123456', 
        description: 'Contraseña del usuario',
        nullable:false,
        minLength:6
    })
    @IsString()
    @MinLength(6)
    @IsOptional()
    password?:string;
}
