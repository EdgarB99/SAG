import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Configuración de swagger 
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,{
    explorer:true,
    swaggerOptions:{
      filter: true,
      showRequestDuration: true
    }
  });

  //enableCors para poder conectar con el frontend
  app.enableCors();

  //Configuración para los pipes globales
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true,
      whitelist: true,
      forbidNonWhitelisted:true,
      transformOptions:{
        enableImplicitConversion:true
      }
    }),
  )
//cambio de puerto NEW
  await app.listen(7714 || 3000, "0.0.0.0");
}
bootstrap();
