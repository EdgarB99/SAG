import { PartialType } from '@nestjs/swagger';
import { CreatePesoDto } from './create-peso.dto';

export class UpdatePesoDto extends PartialType(CreatePesoDto) {}
