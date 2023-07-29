import { PartialType } from '@nestjs/swagger';
import { CreateContenidoDietaDto } from './create-contenido-dieta.dto';

export class UpdateContenidoDietaDto extends PartialType(CreateContenidoDietaDto) {}
