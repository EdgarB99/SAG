import { PartialType } from "@nestjs/swagger";
import { CreateVacaDto } from "./create-vaca.dto";

export class UpdateVacaDto extends PartialType(CreateVacaDto) {}
