import { Injectable } from '@nestjs/common';
import { CreateAlimentacionDto } from './dto/create-alimentacion.dto';
import { UpdateAlimentacionDto } from './dto/update-alimentacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alimentacion } from './entities/alimentacion.entity';
import { Repository } from 'typeorm';
import { LoteService } from '../lote/lote.service';
import { AlimentoService } from '../alimento/alimento.service';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class AlimentacionService {


  constructor(
    @InjectRepository(Alimentacion) private alimentacionRepository: Repository<Alimentacion>,
    private lotesService: LoteService,
    private alimentosService: AlimentoService) { }

  //Metodo para crear alimentacion 

  async createAlimentacion(alimentacion: CreateAlimentacionDto) {
    //Llamamos el método de lotesService para poder verificar que el lote exista 
    const loteFound = await this.lotesService.findLoteById(alimentacion.loteId);

    //Llamamos el método de alimentosService para poder verificar que el alimento exista
    const alimentoFound = await this.alimentosService.findAlimentoById(alimentacion.alimentoId);

    if (!loteFound) {
      throw new HttpException('No se encontró el lote', HttpStatus.NOT_FOUND);
    }

    if (!alimentoFound) {
      throw new HttpException('No se encontró el alimento', HttpStatus.NOT_FOUND);
    }

    const nuevaAlimentacion = this.alimentacionRepository.create(alimentacion);
    return this.alimentacionRepository.save(nuevaAlimentacion);


  }

  //Metodo para obtener todos los registros
  findAllAlimentacion() {
    return this.alimentacionRepository.find();
  }

  async findAllAlimentacionByLoteId(id: string) {
    const alimentaciones = await this.alimentacionRepository.find({
      where: {
        loteId: id
      }
    });

    if (alimentaciones.length === 0) {
      throw new HttpException('El id del lote no existe', HttpStatus.CONFLICT);
    }

    return alimentaciones;
  }

  //Busca la alimentacion por id
  async findAlimentacionById(id: string) {
    const alimentacionFound = await this.alimentacionRepository.findOne({
      where: {
        id
      },
    });

    if (!alimentacionFound) {
      throw new HttpException('Alimentación no encontrada', HttpStatus.NOT_FOUND);
    }

    return alimentacionFound;

  }

  async updateAlimentacion(id: string, alimentacion: UpdateAlimentacionDto) {
    const alimentacionFound = await this.alimentacionRepository.findOne({
      where: {
        id
      }
    });

    if (!alimentacionFound) {
      throw new HttpException('Alimento no encontrado', HttpStatus.NOT_FOUND);
    }

    const updatedAlimentacion = Object.assign(alimentacionFound, alimentacion);

    return this.alimentacionRepository.save(updatedAlimentacion);
  }

  async deleteAlimentacion(id: string) {
    const alimentacionFound = await this.alimentacionRepository.findOne({
      where: {
        id
      }
    });

    if (!alimentacionFound) {
      throw new HttpException('Alimento no encontrado', HttpStatus.NOT_FOUND);
    }

    return this.alimentacionRepository.delete({ id });
  }


}
