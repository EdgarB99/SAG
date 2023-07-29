import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MesPesoService } from './mes-peso.service';
import { CreateMesPesoDto } from './dto/create-mes-peso.dto';
//import { UpdateMesPesoDto } from './dto/update-mes-peso.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Pesos')
@Controller('mes-peso')
export class MesPesoController {
  constructor(private readonly mesPesoService: MesPesoService) {}

  @Post()
  createMesPeso(@Body() mesPeso: CreateMesPesoDto) {
    return this.mesPesoService.createMesPeso(mesPeso);
  }

  @Get()
  findAll() {
    return this.mesPesoService.findAll();
  }

  @Get('vaca/:id')
  findAllPesoByVacaId(@Param('id') id:string) {
    return this.mesPesoService.findAllMesPesoByVacaId(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mesPesoService.findOne(+id);
  }

/*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMesPesoDto: UpdateMesPesoDto) {
    return this.mesPesoService.update(+id, updateMesPesoDto);
  }
*/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mesPesoService.deleteByVacaid(id);
  }
}
