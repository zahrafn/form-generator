import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // تنظیمات Swagger
  const config = new DocumentBuilder()
    .setTitle('API Swagger')
    .setDescription('API Description')
    .setVersion('1.0')
    .addTag('Tags') // می‌توانید تگ‌های API را اضافه کنید
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // مستندات در آدرس /api نم

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
