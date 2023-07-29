import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDosificacionDto } from './dto/create-dosificacion.dto';
import { UpdateDosificacionDto } from './dto/update-dosificacion.dto';
import { LoteService } from 'src/lote/lote.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Dosificacion } from './entities/dosificacion.entity';
import { Repository } from 'typeorm';
import { DietasService } from 'src/dietas/dietas.service';
import * as moment from 'moment';

@Injectable()
export class DosificacionService {
  
  constructor(
    @InjectRepository(Dosificacion) private dosificacionRepository: Repository<Dosificacion>,
    private lotesService: LoteService,
    private dietasService: DietasService) {

    }


  async create(dosificacion: CreateDosificacionDto) {
    
    const LOTEFOUND = await this.lotesService.findLoteById(dosificacion.loteId);

    if (!LOTEFOUND) {
      throw new HttpException('No se encontró el lote', HttpStatus.NOT_FOUND);
    }

    const NUEVADOSIF = this.dosificacionRepository.create(dosificacion);
    return this.dosificacionRepository.save(NUEVADOSIF);

  }

   //Metodo para obtener todos los registros
   findAllDosificacion() {
    return this.dosificacionRepository.find();
  }

  async findAllDosificacionByLoteId(id: string, limit: number, offset: number) {
    console.log('Porque en la calle bota fuego', id);
    const fechaActual: String = moment().format('DD/MM/YYYY');
    const allDosis = await this.dosificacionRepository.find({
      where: {
        lote: {id: id},
      },
      skip: offset,
      take: limit,
      });

    if (allDosis.length === 0) {
      throw new HttpException('El id del lote no existe', HttpStatus.CONFLICT);
    }
    console.log(allDosis)
    const DOSIS = [];
    allDosis.forEach(dosif => {
      console.log(dosif.fechaFinal);
    
      // Formateamos la fecha final a un objeto Date usando Moment.js
      const fechaFinalDate = moment(dosif.fechaFinal, 'DD/MM/YYYY').toDate();
    
      // Formateamos la fecha actual a un objeto Date usando Moment.js
      const fechaActualDate = moment().toDate();
    
      // Comparamos las fechas utilizando objetos Date
      if (fechaFinalDate > fechaActualDate) {
        console.log('entro');
        DOSIS.push(dosif);
      }
    });
    console.log(DOSIS);
    return DOSIS;
  }


  async findDosificacionById(id: string) {
    const DOSISFOUND = await this.dosificacionRepository.findOne({
      where: {
        id: id,
      },
      relations: [],
    });

    if (!DOSISFOUND) {
      throw new HttpException('Dosificación no encontrada', HttpStatus.NOT_FOUND);
    }

    return DOSISFOUND;
  }

  async updateDosificacion(id: string, dosificacion: UpdateDosificacionDto) {
    const DOSISFOUND = await this.dosificacionRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!DOSISFOUND) {
      throw new HttpException('Dosificación no encontrada', HttpStatus.NOT_FOUND);
    }

    const UPDATEDDOSIS = Object.assign(DOSISFOUND, dosificacion);

    return this.dosificacionRepository.save(UPDATEDDOSIS);
  }

  async deleteDosificacion(id: string) {
    return await this.dosificacionRepository.delete(id);
  }

}
