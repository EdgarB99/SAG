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
import { VacasService } from './vacas.service';
import { CreateVacaDto } from './dto/create-vaca.dto';
import { UpdateVacaDto } from './dto/update-vaca.dto';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Vaca } from './entities/vaca.entity';
import { LoteAndArete } from './dto/arete-lote.dto';

@ApiTags('Vacas')
@Controller('vacas')
export class VacasController {
  constructor(private readonly vacasService: VacasService) {}

  @Post('create-vaca')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Vaca creada',
    type: Vaca,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  createVaca(@Body() vaca: CreateVacaDto) {
    return this.vacasService.createVaca(vaca);
  }

  @Post('arete')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve la vaca buscada por su arete y por el loteId',
    type: Vaca,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Vaca no encontrada',
  })
  findVacaByAreteandLoteId(@Body() idandarete: LoteAndArete) {
    return this.vacasService.findVacaByAreteandLoteId(idandarete);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todas las vacas registradas',
    type: Vaca,
  })
  findAllVacas(    
  @Param('id') id: string,
  @Param('limit') limit: number,
  @Param('offset') offset: number,) {
    return this.vacasService.findAllVacas(id, limit, offset);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todas las vacas registradas',
    type: Vaca,
  })
  findAllVacasVendidas(    
  @Param('id') id: string,
  @Param('limit') limit: number,
  @Param('offset') offset: number,) {
    return this.vacasService.findAllVacasVendidas(id, limit, offset);
  }

  /*@Get('usuario/:id')
  findAllVacasByUsuarioId(@Param('id') id: string) {
    return this.vacasService.findAllVacasByUsuarioId(id);
  }*/

  @Get('lote/:id/:limit/:offset')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todas las vacas registradas buscadas por el lote',
    type: Vaca,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Lote no encontrado',
  })
  findAllVacasByLoteId(
    @Param('id') id: string,
    @Param('limit') limit: number,
    @Param('offset') offset: number,
  ) {
    return this.vacasService.findAllVacasByLoteId(id, limit, offset);
  }

  @Get('loteV/:id/:limit/:offset')
  @ApiResponse({
    status: HttpStatus.OK,
    description:
      'Devuelve todas las vacas registradas buscadas por el lote y que han sido vendidas',
    type: Vaca,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Lote no encontrado',
  })
  findAllVacasByLoteIdVendidas(
    @Param('id') id: string,
    @Param('limit') limit: number,
    @Param('offset') offset: number,
  ) {
    return this.vacasService.findAllVacasByLoteIdVendidas(id, limit, offset);
  }

  @Get('loteE/:id/:limit/:offset')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todas las vacas registradas buscadas por el lote y que estan eliminadas',
    type: Vaca,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Lote no encontrado',
  })
  findAllVacasByLoteIdEliminadas(
    @Param('id') id: string,
    @Param('limit') limit: number,
    @Param('offset') offset: number,
  ) {
    return this.vacasService.findAllVacasByLoteIdEliminadas(id, limit, offset);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve la vaca buscada por su id',
    type: Vaca,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Vaca no encontrada',
  })
  findOne(@Param('id') id: string) {
    return this.vacasService.findVacaById(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Vaca Actualizada',
    type: Vaca,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Vaca no encontrada',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  updateVaca(@Param('id') id: string, @Body() vaca: UpdateVacaDto) {
    return this.vacasService.updateVaca(id, vaca);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, description: 'Vaca eliminada' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Vaca no encontrada',
  })
  deleteVaca(@Param('id') id: string) {
    return this.vacasService.deleteVaca(id);
  }
}
