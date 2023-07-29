import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { AuthService } from '../auth/auth.service';
import { Alimento } from './entities/alimento.entity';
import { CreateAlimentoDto } from './dto/create-alimento.dto';
import { UpdateAlimentoDto } from './dto/update-alimento.dto';
import { PaginationQueryDto } from 'src/pagination-query.dto';
import { UsuarioAndAlimento } from './dto/usuarioandalimento.dto';


@Injectable()
export class AlimentoService {

  constructor( @InjectRepository(Alimento) private alimentosRepository: Repository<Alimento>,
  private authService:AuthService){}


  //Meodo para crear un nuevo alimento 

  async createAlimento(alimento: CreateAlimentoDto) {
    //Variable para obtener el usuario.
    const usuarioFound = await this.authService.findUsuarioById(alimento.usuarioId);
    //Variable para guardar el alimento 
    const alimentoFound = await this.alimentosRepository.findOne({
      where:{
          nombreAlimento:alimento.nombreAlimento,
          usuarioId:alimento.usuarioId
      },
  });
    
    if(!usuarioFound){
      throw new HttpException('No se encontró el usuario',HttpStatus.NOT_FOUND);
    }

    if(alimentoFound){
       throw new HttpException('Este lote ya existe', HttpStatus.CONFLICT)
    }

    const nuevoAlimento = this.alimentosRepository.create(alimento);
    return this.alimentosRepository.save(nuevoAlimento);
  }


  async findAlimentoById(id:string){
    const alimentoFound = await this.alimentosRepository.findOne({
      where:{
        id
      },
      relations:['alimentacion']
    });

    if(!alimentoFound){
      throw new HttpException('Alimento no encontrado', HttpStatus.NOT_FOUND);
    }

    return alimentoFound;

  }

  findAllAlimentos(limit:number, offset:number) {
    return this.alimentosRepository.find({
      relations:['alimentacion'], 
      skip:offset,
      take:limit
    });
  }

  async findAllAlimentosByUsuarioId(id:string,limit:number, offset:number){
    const alimentos = await this.alimentosRepository.find({
      where:{
        usuarioId:id
      },
      relations:['alimentacion'], 
      skip:offset,
      take:limit
    });

    if(alimentos.length === 0){
      throw new HttpException('El ID del usuario no existe', HttpStatus.NOT_FOUND);
    }
    return alimentos;
  }

  async updateAlimento(id: string, alimento: UpdateAlimentoDto) {
     const alimentoFound = await this.alimentosRepository.findOne({
        where:{
            id
       }
    });

    if(!alimentoFound){
      throw new HttpException('Alimento no encontrado', HttpStatus.NOT_FOUND);
     }

    const updatedAlimento = Object.assign(alimentoFound,alimento);

    return this.alimentosRepository.save(updatedAlimento);
  }


  async findAlimentoByNameandId(idandname:UsuarioAndAlimento) {

    const alimentoFound = await this.alimentosRepository.findOne({
      where:{
          nombreAlimento:idandname.nombreAlimento,
          usuarioId:idandname.id
      },
      relations:['alimentacion'],
  });

  if(!alimentoFound){
    throw new HttpException('Alimento no encontrado', HttpStatus.NOT_FOUND);
  }
  return alimentoFound;
}




  remove(id: string) {
    return this.alimentosRepository.delete(id);
  }
}
