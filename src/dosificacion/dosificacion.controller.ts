import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { DosificacionService } from './dosificacion.service';
import { CreateDosificacionDto } from './dto/create-dosificacion.dto';
import { UpdateDosificacionDto } from './dto/update-dosificacion.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Dosificacion } from './entities/dosificacion.entity';

@ApiTags('Dosificacion')
@Controller('dosificacion')
export class DosificacionController {
  constructor(private readonly dosificacionService: DosificacionService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Dosificación creada',
    type: Dosificacion,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  createDosificacion(@Body() dosificacion: CreateDosificacionDto) {
    return this.dosificacionService.create(dosificacion);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todas las dosificaciones registradas',
  })
  findAll() {
    return this.dosificacionService.findAllDosificacion();
  }

  @Get('lote/:id/:limit/:offset')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todas las dosificaciones registradas',
  })
  findAllDosificacionByLoteId(@Param('id') id: string, @Param('limit') limit: number, @Param('offset') offset: number) {
    return this.dosificacionService.findAllDosificacionByLoteId(id, limit, offset);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve la dosificacion buscada por su Id',
  })
  findOne(@Param('id') id: string) {
    return this.dosificacionService.findDosificacionById(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Dosificación Actualizada',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Dosificación no encontrada',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  update(@Param('id') id: string, @Body() dosificacion: UpdateDosificacionDto) {
    return this.dosificacionService.updateDosificacion(id, dosificacion);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dosificacionService.deleteDosificacion(id);
  }
}
