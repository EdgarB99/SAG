import { Injectable } from '@nestjs/common';
import { CreatePesoDto } from './dto/create-peso.dto';
import { UpdatePesoDto } from './dto/update-peso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Peso } from './entities/peso.entity';
import { Repository } from 'typeorm';
import { VacasService } from '../vacas/vacas.service';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class PesoService {

  constructor( @InjectRepository(Peso) private pesoRepository: Repository<Peso>,
  private vacasService:VacasService){}

  
  async createPeso(peso: CreatePesoDto) {

    const vacaFound = await this.vacasService.findVacaById(peso.vacaId);

    if(!vacaFound){
      return new HttpException('Vaca no encontrada', HttpStatus.NOT_FOUND);
    }
    const nuevoPeso = this.pesoRepository.create(peso);
    return this.pesoRepository.save(nuevoPeso);
  }

  async findAllPesoByVacaId(id:string){
    const peso = await this.pesoRepository.find({
      where:{
        vacaId:id
      }
    });

    if(!peso){
      throw new HttpException('El id del usuario no existe', HttpStatus.CONFLICT);
    }

    return peso;

  }

 async deleteByVacaid(id:string){
    await this.pesoRepository.delete({
      vacaId:id 
    })
  }

  findAll() {
    return this.pesoRepository.find();
  }

  findPesoById(id:string){
    const pesoFound = this.pesoRepository.findOne({
      where:{
        id
      }
    });

    if(!pesoFound){
      throw new HttpException('No se encontro el peso de la vaca',HttpStatus.NOT_FOUND);
    }

    return pesoFound;
  }

  async update(id: string, peso: UpdatePesoDto) {
    const pesoFound = await this.pesoRepository.findOne({
      where:{
          id
      }
  });
  
  if(!pesoFound){
      throw new HttpException('Vaca no encontrada', HttpStatus.NOT_FOUND);
  }
  
  const updatedPeso = Object.assign(pesoFound,peso);
  
  return this.pesoRepository.save(updatedPeso);
  }

  remove(id: number) {
    return `This action removes a #${id} peso`;
  }
}
