import { PartialType } from '@nestjs/swagger';
import { CreateDosificacionDto } from './create-dosificacion.dto';

export class UpdateDosificacionDto extends PartialType(CreateDosificacionDto) {}
