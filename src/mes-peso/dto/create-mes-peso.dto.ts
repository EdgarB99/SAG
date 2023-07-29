import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateMesPesoDto {
    @IsString()
    dia:string;
    @IsNumber()
    kg:number;
    @IsNumber()
    lb:number;
    @IsString()
    @IsUUID()
    vacaId:string;
}
