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
import { ComprasService } from './compras.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Compra } from './entities/compra.entity';
import { UsuarioAndCompra } from './dto/usuario-compra.dto';

@ApiTags('Compras')
@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

  @Post('create-compra')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Compra creada',
    type: Compra,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  createCompra(@Body() compra: CreateCompraDto) {
    return this.comprasService.createCompra(compra);
  }

  @Get(':limit/:offset')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todos los alimentos registrados',
  })
  findAll(@Param('limit') limit: number, @Param('offset') offset: number) {
    return this.comprasService.findAllCompras(limit, offset);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve la compra buscado por su Id',
  })
  findAlimentoById(@Param('id') id: string) {
    return this.comprasService.findCompraById(id);
  }

  @Post('nombre')
  @ApiResponse({
    status: HttpStatus.OK,
    description:
      'Devuelve la compra buscado por su nombre y por el usuarioId',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Alimento no encontrado',
  })
  findCompraByNameandId(@Body() idandname: UsuarioAndCompra) {
    return this.comprasService.findCompraByNameandId(idandname);
  }

  @Get('usuario/:id/:limit/:offset')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve los alimentos buscados por el usuarioId',
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
    return this.comprasService.findAllComprasByUsuarioId(id, limit, offset);
  }

  @Get('usuarioA/:id/:limit/:offset')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve los alimentos buscados por el usuarioId',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Usuario no encontrado',
  })
  findAllComprasByUsuarioIdTipoAlimento(
    @Param('id') id: string,
    @Param('limit') limit: number,
    @Param('offset') offset: number,
  ) {
    return this.comprasService.findAllComprasByUsuarioIdandTipoAlimento(id, limit, offset);
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, description: 'Alimento actualizado' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Compra no encontrado',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  update(@Param('id') id: string, @Body() compra: UpdateCompraDto) {
    return this.comprasService.updateCompra(id, compra);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, description: 'Alimento eliminado' })
  remove(@Param('id') id: string) {
    return this.comprasService.remove(id);
  }
}
