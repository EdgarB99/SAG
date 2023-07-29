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
import { DietasService } from './dietas.service';
import { CreateDietaDto } from './dto/create-dieta.dto';
import { UpdateDietaDto } from './dto/update-dieta.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Dieta } from './entities/dieta.entity';
import { UsuarioAndDieta } from './dto/usuario-dieta.dto';

 
@Controller('dietas')
export class DietasController {
  constructor(private readonly dietasService: DietasService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Dieta creada',
    type: Dieta,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  createDieta(@Body() dieta: CreateDietaDto) {
    return this.dietasService.createDieta(dieta);
  }

  @Post('nombre')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve la compra buscado por su nombre y por el usuarioId',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Alimento no encontrado',
  })
  findDietaByNameandId(@Body() idandname: UsuarioAndDieta) {
    return this.dietasService.findDietaByNameandId(idandname);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todas las dietas registradas',
  })
  findAll() {
    return this.dietasService.findAllDietas();
  }

  
  @Get('usuario/:id/:limit/:offset')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve todas las dietas registradas',
  })
  findAllByUsuarioId(@Param('id') id: string, @Param('limit') limit: number, @Param('offset') offset: number) {
    return this.dietasService.findAllDietasByUsuarioId(id, limit, offset );
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve la dieta buscada por su Id',
  })
  findOne(@Param('id') id: string) {
    return this.dietasService.findDietaById(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Dieta Actualizada',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Dieta no encontrada',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  update(@Param('id') id: string, @Body() dieta: UpdateDietaDto) {
    return this.dietasService.updateDieta(id, dieta);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dietasService.remove(id);
  }
}
