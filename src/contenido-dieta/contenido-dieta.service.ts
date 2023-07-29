import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateContenidoDietaDto } from './dto/create-contenido-dieta.dto';
import { ContenidoDieta } from './entities/contenido-dieta.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateContenidoDietaDto } from './dto/update-contenido-dieta.dto';
import { DietasService } from 'src/dietas/dietas.service';

@Injectable()
export class ContenidoDietaService {
  constructor(
    @InjectRepository(ContenidoDieta) private contenidoRepository: Repository<ContenidoDieta>,
  ) {}

  async create(contenido: CreateContenidoDietaDto) {
    
    // const DIETAFOUND = await this.dietaService.findDietaById(
    //   contenido.dietaId
    // );

    // if (!DIETAFOUND) {
    //   throw new HttpException(
    //     'No se encontró el usuario',
    //     HttpStatus.NOT_FOUND,
    //   );
    // }

    const NUEVOCONTENIDO = this.contenidoRepository.create(contenido);
    return this.contenidoRepository.save(NUEVOCONTENIDO);
  }

  async findContenidoById(id: string) {
    const COMPRAFOUND = await this.contenidoRepository.findOne({
      where: {
        id,
      },
    });

    if (!COMPRAFOUND) {
      throw new HttpException('Contenido no encontrado', HttpStatus.NOT_FOUND);
    }

    return COMPRAFOUND;
  }

  findAllContenido(limit: number, offset: number) {
    return this.contenidoRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findAllContenidoByUsuarioId(id: string, limit: number, offset: number) {
    const CONTENIDO = await this.contenidoRepository.find({
      where: {
        dietaId: id
      },
      skip: offset,
      take: limit,
    });

    if (CONTENIDO.length === 0) {
      throw new HttpException(
        'El ID del usuario no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return CONTENIDO;
  }

  async updateContenido(id: string, contenido: UpdateContenidoDietaDto) {
    const CONTENIDOFOUND = await this.contenidoRepository.findOne({
      where: {
        id,
      },
    });

    if (!CONTENIDOFOUND) {
      throw new HttpException('Compra no encontrada', HttpStatus.NOT_FOUND);
    }

    const UPDATEDCOMPRA = Object.assign(CONTENIDOFOUND, contenido);

    return this.contenidoRepository.save(UPDATEDCOMPRA);
  }

  // async findCompraByNameandId(idandname: UsuarioAndContenido) {
  //   const COMPRAFOUND = await this.comprasRepository.findOne({
  //     where: {
  //       concepto: idandname.concepto,
  //       usuarioId: idandname.id,
  //     }
  //   });

  //   if (!COMPRAFOUND) {
  //     throw new HttpException('Compra no encontrado', HttpStatus.NOT_FOUND);
  //   }
  //   return COMPRAFOUND;
  // }

  async remove(id: string) {
    return await this.contenidoRepository.delete(id);
  }

}
