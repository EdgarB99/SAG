import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lote } from 'src/lote/entities/lote.entity';
import { Repository } from 'typeorm';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Venta } from './entities/venta.entity';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { Vaca } from 'src/vacas/entities/vaca.entity';

@Injectable()
export class VentasService {

  constructor( @InjectRepository(Venta) private ventaRepository: Repository<Venta>,
               @InjectRepository(Vaca) private vacasRepository: Repository<Vaca>){}

  async createVenta(id:string, venta: CreateVentaDto) {
    const VACAFOUND = await this.vacasRepository.findOne({
      where:{
        id
      }
    });
    
    if(!VACAFOUND){
      throw new HttpException('No se encontró el lote', HttpStatus.NOT_FOUND);
    }

    const NUEVAVENTA = this.ventaRepository.create(venta);
    const SAVEDVACA = await this.ventaRepository.save(NUEVAVENTA);

    VACAFOUND.vendido = true;
    VACAFOUND.venta = SAVEDVACA;

    return this.vacasRepository.save(VACAFOUND);

  }

  findAllVentasByVacaId(){

  }

  findAll() {
    return `This action returns all ventas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venta`;
  }

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
