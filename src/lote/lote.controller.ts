import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoteService } from './lote.service';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { UsuarioAndLote } from './dto/usuarioandlote.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common/enums';
import { Lote } from './entities/lote.entity';


@ApiTags('Lote')
@Controller('lote')
export class LoteController {
  constructor(private readonly loteService: LoteService) {}

  
  @Post('createLote')
  @ApiResponse({ status:HttpStatus.CREATED, description: 'Lote creado', type: Lote})
  @ApiResponse({ status:HttpStatus.BAD_REQUEST, description: 'Bad request'})
  createLote(@Body() lote: CreateLoteDto) {
    return this.loteService.createLote(lote);
  }

  @ApiResponse({status:HttpStatus.OK, description: 'Devuelve todos los lotes', type: Lote})
  @Get()
  findAllLotes() {
    return this.loteService.findAllLotes();
  }

  @ApiResponse({status:HttpStatus.OK, description: 'Devuelve el lote que busca por su Id', type:Lote})
  @ApiResponse({status:HttpStatus.NOT_FOUND, description: 'Lote no encontrado'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loteService.findLoteById(id);
  }

  @ApiResponse({status:HttpStatus.OK, description: 'Devuelve los lotes que busca por el ID del usuario', type:Lote})
  @ApiResponse({status:HttpStatus.NOT_FOUND, description: 'Usuario no encontrado'})
  @Get('usuario/:id/:limit/:offset')
  findAllLotesByUsuarioId(@Param('id') id:string, @Param('limit') limit:number, @Param('offset') offset:number){
    return this.loteService.findAllLotesByUsuarioId(id, limit, offset);
  }

  @Post('nombre')
  @ApiResponse({status:HttpStatus.OK, description: 'Devuelve el lote buscado por su nombre y por el usuarioId', type:Lote})
  @ApiResponse({status:HttpStatus.NOT_FOUND, description: 'Lote no encontrado'})
  findLoteByNameandId(@Body() idandname: UsuarioAndLote ) {
    return this.loteService.findLoteByNameandId(idandname);
  }

  @Patch(':id')
  @ApiResponse({ status:HttpStatus.OK, description: 'Lote actualizado'})
  @ApiResponse({ status:HttpStatus.NOT_FOUND , description: 'Lote no encontrado'})
  @ApiResponse({ status:HttpStatus.BAD_REQUEST, description: 'Bad request'})
  update(@Param('id') id: string, @Body() lote: UpdateLoteDto) {
    return this.loteService.updateLote(id, lote);
  }

  /*
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loteService.remove(+id);
  }*/

}
