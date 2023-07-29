import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AlimentacionService } from './alimentacion.service';
import { CreateAlimentacionDto } from './dto/create-alimentacion.dto';
import { UpdateAlimentacionDto } from './dto/update-alimentacion.dto';
import { Alimentacion } from './entities/alimentacion.entity';

@ApiTags('Alimentación')
@Controller('alimentacion')
export class AlimentacionController {
  constructor(private readonly alimentacionService: AlimentacionService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Alimentación creada',
    type: Alimentacion,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  create(@Body() createAlimentacionDto: CreateAlimentacionDto) {
    return this.alimentacionService.createAlimentacion(createAlimentacionDto);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todas las alimentaciones registradas',
  })
  findAll() {
    return this.alimentacionService.findAllAlimentacion();
  }

  @Get('lote/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve la alimentación buscada por el loteId',
  })
  findAllAlimentacionByLoteId(@Param('id') id: string) {
    return this.alimentacionService.findAllAlimentacionByLoteId(id);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve la alimentación buscada por su Id',
  })
  findOne(@Param('id') id: string) {
    return this.alimentacionService.findAlimentacionById(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Alimentación Actualizada',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Alimentación no encontrada',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  update(@Param('id') id: string, @Body() alimentacion: UpdateAlimentacionDto) {
    return this.alimentacionService.updateAlimentacion(id, alimentacion);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alimentacionService.deleteAlimentacion(id);
  }
}
