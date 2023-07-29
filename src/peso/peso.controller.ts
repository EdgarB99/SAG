import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PesoService } from './peso.service';
import { CreatePesoDto } from './dto/create-peso.dto';
import { UpdatePesoDto } from './dto/update-peso.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Peso } from './entities/peso.entity';
import { HttpStatus } from '@nestjs/common/enums';

@ApiTags('Peso')
@Controller('peso')
export class PesoController {
  constructor(private readonly pesoService: PesoService) {}

  @Post('create-peso')
  @ApiResponse({ status:HttpStatus.CREATED, description: 'Peso registrado', type: Peso})
  @ApiResponse({ status:HttpStatus.BAD_REQUEST, description: 'Bad request'})
  createPeso(@Body() createPesoDto: CreatePesoDto) {
    return this.pesoService.createPeso(createPesoDto);
  }

  @Get('vaca/:id')
  @ApiResponse({ status:HttpStatus.OK, description: 'Devuelve todos los pesos de la vaca', type: Peso})
  @ApiResponse({ status:HttpStatus.NOT_FOUND, description: 'Vaca no encontrada'})
  findAllPesoByVacaId(@Param('id') id: string) {
    return this.pesoService.findAllPesoByVacaId(id);
  }

  @Get()
  @ApiResponse({ status:HttpStatus.OK, description: 'Devuelve todos los pesos', type: Peso})
  findAll() {
    return this.pesoService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status:HttpStatus.OK, description: 'Devuelve el peso buscado por su id', type: Peso})
  @ApiResponse({ status:HttpStatus.NOT_FOUND, description: 'Peso no encontrado'})
  findPesoById(@Param('id') id: string){
    return this.pesoService.findPesoById(id);
  }

  @Patch(':id')
  @ApiResponse({ status:HttpStatus.OK, description: 'Peso Actualizado', type: Peso})
  @ApiResponse({ status:HttpStatus.NOT_FOUND, description: 'Peso no encontrado'})
  @ApiResponse({ status:HttpStatus.BAD_REQUEST, description: 'Bad request'})
  update(@Param('id') id: string, @Body() updatePesoDto: UpdatePesoDto) {
    return this.pesoService.update(id, updatePesoDto);
  }

  /*
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pesoService.remove(+id);
  }*/
}
