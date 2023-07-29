import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common/enums';
import { Venta } from './entities/venta.entity';

@ApiTags('Ventas')
@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post(':id')
  @ApiResponse({ status:HttpStatus.CREATED, description: 'Venta creada', type: Venta})
  @ApiResponse({ status:HttpStatus.BAD_REQUEST, description: 'Bad request'})
  create(@Param('id') id:string,@Body() createVentaDto: CreateVentaDto) {
    return this.ventasService.createVenta(id,createVentaDto);
  }

  @Get()
  @ApiResponse({status:HttpStatus.OK, description: 'Devuelve todas las ventas registradas', type:Venta})
  findAll() {
    return this.ventasService.findAll();
  }

  /*
  @Get(':id')
  @ApiResponse({status:HttpStatus.OK, description: 'Devuelve la ventas buscada por su id', type:Venta})
  @ApiResponse({status:HttpStatus.NOT_FOUND, description: 'Venta no encontrada'})
  findOne(@Param('id') id: string) {
    return this.ventasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentaDto: UpdateVentaDto) {
    return this.ventasService.update(+id, updateVentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventasService.remove(+id);
  }*/
}
