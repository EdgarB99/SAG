import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDietaDto } from './dto/create-dieta.dto';
import { UpdateDietaDto } from './dto/update-dieta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dieta } from './entities/dieta.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
import { UsuarioAndDieta } from './dto/usuario-dieta.dto';

@Injectable()
export class DietasService {
  constructor(
    @InjectRepository(Dieta) private dietasRepository: Repository<Dieta>,
    private authService: AuthService,
  ) {}

  async createDieta(dieta: CreateDietaDto) {
    const USUARIOFOUND = await this.authService.findUsuarioById(
      dieta.usuarioId,
    );

    const DIETAFOUND = await this.dietasRepository.findOne({
      where: {
        nombreDieta: dieta.nombreDieta,
        usuarioId: dieta.usuarioId,
      },
    });

    if (!USUARIOFOUND) {
      throw new HttpException(
        'No se encontró el usuario',
        HttpStatus.NOT_FOUND,
      );
    }

    if (DIETAFOUND) {
      throw new HttpException('Esta Dieta ya existe', HttpStatus.CONFLICT);
    }

    const NUEVADIETA = this.dietasRepository.create(dieta);
    return this.dietasRepository.save(NUEVADIETA);
  }

  findAllDietas() {
    return this.dietasRepository.find({
      relations: ['contenidoDieta'],
    });
  }

  async findAllDietasByUsuarioId(id: string, limit: number, offset: number) {
    const DIETAS = await this.dietasRepository.find({
      where: {
        usuarioId: id,
      },
      relations: ['contenidoDieta'],
      skip: offset,
      take: limit,
    });

    if (DIETAS.length === 0) {
      throw new HttpException(
        'El id del usuario no existe',
        HttpStatus.CONFLICT,
      );
    }

    return DIETAS;
  }

  async findDietaById(id: string) {
    const DIETAFOUND = await this.dietasRepository.findOne({
      where: {
        id: id,
      },
      relations: ['contenidoDieta'],
    });

    if (!DIETAFOUND) {
      throw new HttpException('Dieta no encontrada', HttpStatus.NOT_FOUND);
    }
    return DIETAFOUND;
  }

  async findDietaByNameandId(idandname: UsuarioAndDieta) {
    const DIETAFOUND = await this.dietasRepository.findOne({
      where: {
        nombreDieta: idandname.nombreDieta,
        usuarioId: idandname.id,
      },
      relations: ['contenidoDieta'],
    });

    if (!DIETAFOUND) {
      throw new HttpException('Lote no encontrado', HttpStatus.NOT_FOUND);
    }
    return DIETAFOUND;
  }

  async updateDieta(id: string, dieta: UpdateDietaDto) {
    const DIETAFOUND = await this.dietasRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!DIETAFOUND) {
      throw new HttpException('Dieta no encontrada', HttpStatus.NOT_FOUND);
    }

    const UPDATEDDIETA = Object.assign(DIETAFOUND, dieta);

    return this.dietasRepository.save(UPDATEDDIETA);
  }

  async remove(id: string) {
    return await this.dietasRepository.delete(id);
  }
}
