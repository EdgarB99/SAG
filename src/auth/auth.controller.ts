import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from './entities/auth.entity';
import { HttpStatus } from '@nestjs/common/enums';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Usuario creado',
    type: CreateAuthDto,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  createUsuario(@Body() usuario: CreateAuthDto) {
    return this.authService.createUsuario(usuario);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Usuario Logueado'
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Usuario no encontrado',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'La contraseña debe ser de 6 o más caracteres',
  })
  @Post('login')
  loginUsuario(@Body() usuarioLogin: LoginUsuarioDto) {
    return this.authService.loginUsuario(usuarioLogin);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve a todos los usuarios registrados',
    type: 'true',
  })
  @Get()
  findAllUsuarios() {
    return this.authService.findAllUsuarios();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Devuelve el usuario que estas buscando',
    type: Auth,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Usuario no encontrado',
  })
  @Get(':id')
  findOneUsuario(@Param('id') id: string) {
    return this.authService.findUsuarioById(id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Usuario actualizado',
    type: Auth,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Usuario no encontrado',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @Patch(':id')
  updateUsuario(@Param('id') id: string, @Body() usuario: UpdateAuthDto) {
    return this.authService.updateUsuario(id, usuario);
  }

  /*
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }*/
}
