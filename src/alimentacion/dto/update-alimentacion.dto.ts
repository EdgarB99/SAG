import { PartialType } from '@nestjs/swagger';
import { CreateAlimentacionDto } from './create-alimentacion.dto';

export class UpdateAlimentacionDto extends PartialType(CreateAlimentacionDto) {}
