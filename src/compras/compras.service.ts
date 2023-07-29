import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { UsuarioAndCompra } from './dto/usuario-compra.dto';

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra) private comprasRepository: Repository<Compra>,
    private authService: AuthService,
  ) {}

  async createCompra(compra: CreateCompraDto) {
    
    const USUARIOFOUND = await this.authService.findUsuarioById(
      compra.usuarioId,
    );

    if (!USUARIOFOUND) {
      throw new HttpException(
        'No se encontró el usuario',
        HttpStatus.NOT_FOUND,
      );
    }

    const NUEVACOMPRA = this.comprasRepository.create(compra);
    return this.comprasRepository.save(NUEVACOMPRA);
  }

  async findCompraById(id: string) {
    const COMPRAFOUND = await this.comprasRepository.findOne({
      where: {
        id,
      },
    });

    if (!COMPRAFOUND) {
      throw new HttpException('Compra no encontrado', HttpStatus.NOT_FOUND);
    }

    return COMPRAFOUND;
  }

  findAllCompras(limit: number, offset: number) {
    return this.comprasRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findAllComprasByUsuarioId(id: string, limit: number, offset: number) {
    const COMPRAS = await this.comprasRepository.find({
      where: {
        usuarioId: id,
      },
      skip: offset,
      take: limit,
    });

    if (COMPRAS.length === 0) {
      throw new HttpException(
        'El ID del usuario no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return COMPRAS;
  }

  async findAllComprasByUsuarioIdandTipoAlimento(id: string, limit: number, offset: number) {
    const COMPRAS = await this.comprasRepository.find({
      where: {
        usuarioId: id,
        tipo:'Alimento'
      },
      skip: offset,
      take: limit,
    });

    if (COMPRAS.length === 0) {
      throw new HttpException(
        'El ID del usuario no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return COMPRAS;
  }

  async updateCompra(id: string, compra: UpdateCompraDto) {
    const COMPRAFOUND = await this.comprasRepository.findOne({
      where: {
        id,
      },
    });

    if (!COMPRAFOUND) {
      throw new HttpException('Compra no encontrada', HttpStatus.NOT_FOUND);
    }

    const UPDATEDCOMPRA = Object.assign(COMPRAFOUND, compra);

    return this.comprasRepository.save(UPDATEDCOMPRA);
  }

  async findCompraByNameandId(idandname: UsuarioAndCompra) {
    const COMPRAFOUND = await this.comprasRepository.findOne({
      where: {
        concepto: idandname.concepto,
        usuarioId: idandname.id,
      }
    });

    if (!COMPRAFOUND) {
      throw new HttpException('Compra no encontrado', HttpStatus.NOT_FOUND);
    }
    return COMPRAFOUND;
  }

  async remove(id: string) {
    return await this.comprasRepository.delete(id);
  }

}
