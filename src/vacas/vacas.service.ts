import { Injectable } from '@nestjs/common';
import { CreateVacaDto } from './dto/create-vaca.dto';
import { UpdateVacaDto } from './dto/update-vaca.dto';
import { Vaca } from './entities/vaca.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { AuthService } from '../auth/auth.service';
import { LoteService } from '../lote/lote.service';
import { LoteAndArete } from './dto/arete-lote.dto';

@Injectable()
export class VacasService {
  constructor(
    @InjectRepository(Vaca) private vacasRepository: Repository<Vaca>,
    private loteService: LoteService,
  ) {}

  async createVaca(vaca: CreateVacaDto) {
    const loteFound = await this.loteService.findLoteById(vaca.loteId);
    const areteFound = await this.vacasRepository.findOne({
      where: {
        arete: vaca.arete,
        loteId: vaca.loteId,
      },
    });

    if (!loteFound) {
      return new HttpException(
        'No se encontró el usuario',
        HttpStatus.NOT_FOUND,
      );
    }

    if (areteFound) {
      throw new HttpException(`El arete ya es usado por otra vaca`, 403);
    }

    const nuevaVaca = this.vacasRepository.create(vaca);
    return this.vacasRepository.save(nuevaVaca);
  }

  findAllVacas(id: string, limit: number, offset: number) {
    return this.vacasRepository.find({
      where: {
        vendido: false, 
        eliminado: false
      },
      skip: offset,
      take: limit,
      relations: ['peso', 'venta'],
    });
  }

  findAllVacasVendidas(id: string, limit: number, offset: number) {
    return this.vacasRepository.find({
      where: {
        vendido: true
      },
      skip: offset,
      take: limit,
      relations: ['peso', 'venta'],
    });
  }

  
  findAllVacasEliminadas(id: string, limit: number, offset: number) {
    return this.vacasRepository.find({
      where: {
        vendido: true
      },
      skip: offset,
      take: limit,
      relations: ['peso', 'venta'],
    });
  }

  async findAllVacasByLoteId(id: string, limit: number, offset: number) {
    const vacas = await this.vacasRepository.find({
      where: {
        loteId: id,
        vendido: false,
        eliminado: false,
      },
      skip: offset,
      take: limit,
      relations: ['peso', 'venta'],
    });

    if (!vacas) {
      throw new HttpException('El id del lote no existe', HttpStatus.CONFLICT);
    }

    return vacas;
  }

  async findAllVacasByLoteIdVendidas(id: string, limit: number, offset: number) {
    const VACAS = await this.vacasRepository.find({
      where: {
        loteId: id,
        vendido: true
      },
      skip: offset,
      take: limit,
      relations: ['peso', 'venta'],
    });

    if (!VACAS) {
      throw new HttpException(
        'El id del lote no existe',
        HttpStatus.CONFLICT,
      );
    }

    return VACAS;
  }

  async findAllVacasByLoteIdEliminadas(id: string, limit: number, offset: number) {
    const VACAS = await this.vacasRepository.find({
      where: {
        loteId: id,
        eliminado: true
      },
      skip: offset,
      take: limit,
      relations: ['peso', 'venta'],
    });

    if (!VACAS) {
      throw new HttpException(
        'El id del lote no existe',
        HttpStatus.CONFLICT,
      );
    }

    return VACAS;
  }

  async findVacaById(id: string) {
    const vacaFound = await this.vacasRepository.findOne({
      where: {
        id: id,
      },
      relations: ['peso', 'venta'],
    });

    if (!vacaFound) {
      throw new HttpException('Vaca no encontrada', HttpStatus.NOT_FOUND);
    }

    return vacaFound;
  }

  async findVacaByAreteandLoteId(areteAndloteid: LoteAndArete) {
    const vacaFound = await this.vacasRepository.findOne({
      where: {
        arete: areteAndloteid.arete,
        loteId: areteAndloteid.id,
      },
      relations: ['peso', 'venta'],
    });

    if (!vacaFound) {
      throw new HttpException('Vaca no encontrada', HttpStatus.NOT_FOUND);
    }

    return vacaFound;
  }

  async updateVaca(id: string, peso: UpdateVacaDto) {
    const vacaFound = await this.vacasRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!vacaFound) {
      throw new HttpException('Vaca no encontrada', HttpStatus.NOT_FOUND);
    }

    const updatedVaca = Object.assign(vacaFound, peso);

    return this.vacasRepository.save(updatedVaca);
  }

  async deleteVaca(id: string) {
    return await this.vacasRepository.delete(id);
  }

}
