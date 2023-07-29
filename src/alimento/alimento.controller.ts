import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/pagination-query.dto';
import { AlimentoService } from './alimento.service';
import { CreateAlimentoDto } from './dto/create-alimento.dto';
import { UpdateAlimentoDto } from './dto/update-alimento.dto';
import { Alimento } from './entities/alimento.entity';
import { UsuarioAndAlimento } from './dto/usuarioandalimento.dto';

@ApiTags('Alimentos')
@Controller('alimento')
export class AlimentoController {
  constructor(private readonly alimentoService: AlimentoService) {}

  @Post()
  @ApiResponse({ status:HttpStatus.CREATED, description: 'Alimento creado', type: 'true'})
  @ApiResponse({ status:HttpStatus.BAD_REQUEST, description: 'Bad request'})
  create(@Body() createAlimentoDto: CreateAlimentoDto) {
    return this.alimentoService.createAlimento(createAlimentoDto);
  }

  @Get(':limit/:offset')
  @ApiResponse({ status:HttpStatus.OK , description: 'Devuelve todos los alimentos registrados'})
  findAll(@Param('limit') limit:number, @Param('offset') offset:number) {
    return this.alimentoService.findAllAlimentos(limit, offset);
  }

  @Get(':id')
  @ApiResponse({ status:HttpStatus.OK , description: 'Devuelve el alimento buscado por su Id'})
  findAlimentoById(@Param('id') id: string) {
    return this.alimentoService.findAlimentoById(id);
  }

  @Post('nombre')
  @ApiResponse({status:HttpStatus.OK, description: 'Devuelve el alimento buscado por su nombre y por el usuarioId', type:Alimento})
  @ApiResponse({status:HttpStatus.NOT_FOUND, description: 'Alimento no encontrado'})
  findAlimentoByNameandId(@Body() idandname:UsuarioAndAlimento){
    return this.alimentoService.findAlimentoByNameandId(idandname);
  }

  @Get('usuario/:id/:limit/:offset')
  @ApiResponse({ status:HttpStatus.OK , description: 'Devuelve los alimentos buscados por el usuarioId'})
  @ApiResponse({ status:HttpStatus.NOT_FOUND , description: 'Usuario no encontrado'})
  findAllAlimentosByUsuarioId(@Param('id') id:string, @Param('limit') limit:number, @Param('offset') offset:number){
    return this.alimentoService.findAllAlimentosByUsuarioId(id, limit, offset);
  }

  @Patch(':id')
  @ApiResponse({ status:HttpStatus.OK, description: 'Alimento actualizado'})
  @ApiResponse({ status:HttpStatus.NOT_FOUND , description: 'Alimento no encontrado'})
  @ApiResponse({ status:HttpStatus.BAD_REQUEST, description: 'Bad request'})
  update(@Param('id') id: string, @Body() alimento: UpdateAlimentoDto) {
    return this.alimentoService.updateAlimento(id, alimento);
  }

  @Delete(':id')
  @ApiResponse({ status:HttpStatus.OK, description: 'Alimento eliminado'})
  remove(@Param('id') id: string) {
    return this.alimentoService.remove(id);
  }
}
