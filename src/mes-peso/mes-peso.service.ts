import { Injectable } from '@nestjs/common';
import { CreateMesPesoDto } from './dto/create-mes-peso.dto';
//import { UpdateMesPesoDto } from './dto/update-mes-peso.dto';
import { MesPeso } from './entities/mes-peso.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { VacasService } from '../vacas/vacas.service';

@Injectable()
export class MesPesoService {

  constructor( @InjectRepository(MesPeso) private mespesoRepository: Repository<MesPeso>,
                private vacasService:VacasService){}

  async createMesPeso(mesPeso: CreateMesPesoDto) {

    const vacaFound = await this.vacasService.findVacaById(mesPeso.vacaId);

    if(!vacaFound){
      return new HttpException('Vaca no encontrada', HttpStatus.NOT_FOUND);
    }

    const nuevoPeso = this.mespesoRepository.create(mesPeso);
    return this.mespesoRepository.save(nuevoPeso);
  }

  async findAllMesPesoByVacaId(id:string){
    const mespeso = await this.mespesoRepository.find({
      where:{
        vacaId:id
      }
    });

    if(!mespeso){
      throw new HttpException('El id del usuario no existe', HttpStatus.CONFLICT);
    }

    return mespeso;

  }

 async deleteByVacaid(id:string){
    await this.mespesoRepository.delete({
      vacaId:id 
    })
  }

  findAll() {
    return this.mespesoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} mesPeso`;
  }
/*
  update(id: number, updateMesPesoDto: UpdateMesPesoDto) {
    return `This action updates a #${id} mesPeso`;
  }
*/
  remove(id: number) {
    return `This action removes a #${id} mesPeso`;
  }
}
