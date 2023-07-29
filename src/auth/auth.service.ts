import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private usuariosRepository: Repository<Auth>,
    private jwtService: JwtService,
  ) {}

  async createUsuario(usuario: CreateAuthDto) {
    const { password } = usuario;
    const plainToHash = await hash(password, 10);
    usuario = { ...usuario, password: plainToHash };
    const emailFound = await this.usuariosRepository.findOne({
      where: {
        email: usuario.email,
      },
    });

    if (emailFound) {
      throw new HttpException(
        `El email ya es usado por otro usuario`,
        HttpStatus.CONFLICT,
      );
    }
    const nuevoUsuario = this.usuariosRepository.create(usuario);
    this.usuariosRepository.save(nuevoUsuario);
    const payload = { id: nuevoUsuario.id, email: nuevoUsuario.email };
    const token = await this.jwtService.sign(payload);
    
    const data = {
      token,
    };

    return data;
  }

  async loginUsuario(usuarioLogin: LoginUsuarioDto) {
    const usuarioFound = await this.usuariosRepository.findOne({
      where: {
        email: usuarioLogin.email,
      },
    });

    if (!usuarioFound) {
      throw new HttpException(`Usuario no encontrado`, HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(
      usuarioLogin.password,
      usuarioFound.password,
    );

    if (!checkPassword) {
      throw new HttpException(`Contraseña Invalida`, 403);
    }

    const payload = { id: usuarioFound.id, email: usuarioFound.email };
    const token = await this.jwtService.sign(payload);

    const data = {
      token,
    };

    return data;
  }

  findAllUsuarios() {
    return this.usuariosRepository.find({
      relations: ['lotes', 'compras'],
    });
  }

  async findUsuarioById(id: string) {
    const usuarioFound = await this.usuariosRepository.findOne({
      where: {
        id: id,
      },
      relations: ['lotes'],
    });

    if (!usuarioFound) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    return usuarioFound;
  }

  async updateUsuario(id: string, usuario: UpdateAuthDto) {
    const usuarioFound = await this.usuariosRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!usuarioFound) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    const { password } = usuario;

    if (password) {
      const plainToHash = await hash(password, 10);
      usuario = { ...usuario, password: plainToHash };
    }

    const updatedUsuario = Object.assign(usuarioFound, usuario);

    return this.usuariosRepository.save(updatedUsuario);
  }
}
