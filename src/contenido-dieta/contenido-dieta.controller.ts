import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ContenidoDietaService } from './contenido-dieta.service';
import { CreateContenidoDietaDto } from './dto/create-contenido-dieta.dto';
import { UpdateContenidoDietaDto } from './dto/update-contenido-dieta.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ContenidoDieta } from './entities/contenido-dieta.entity';

@ApiTags('Contenido Dieta')
@Controller('contenido-dieta')
export class ContenidoDietaController {
  constructor(private readonly contenidoDietaService: ContenidoDietaService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Contenido creado',
    type: ContenidoDieta,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  create(@Body() createContenidoDto: CreateContenidoDietaDto) {
    return this.contenidoDietaService.create(createContenidoDto);
  }

  @Get(':limit/:offset')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todos los contenidos registrados',
  })
  findAll(@Param('limit') limit: number, @Param('offset') offset: number) {
    return this.contenidoDietaService.findAllContenido(limit, offset);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve el contenido buscado por su Id',
  })
  findAlimentoById(@Param('id') id: string) {
    return this.contenidoDietaService.findContenidoById(id);
  }

  @Get('usuario/:id/:limit/:offset')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve los contenidos buscados por el usuarioId',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Usuario no encontrado',
  })
  findAllComprasByUsuarioId(
    @Param('id') id: string,
    @Param('limit') limit: number,
    @Param('offset') offset: number,
  ) {
    return this.contenidoDietaService.findAllContenidoByUsuarioId(id, limit, offset);
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, description: 'Contenido actualizado' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Contenido no encontrado',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  update(@Param('id') id: string, @Body() contenido: UpdateContenidoDietaDto) {
    return this.contenidoDietaService.updateContenido(id, contenido);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contenidoDietaService.remove(id);
  }
}
