import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormGeneratorModule } from './form-generator/form-generator.module';

@Module({
  imports: [FormGeneratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
