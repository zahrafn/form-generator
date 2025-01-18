import { Module } from '@nestjs/common';
import { FormGeneratorService } from './form-generator.service';
import { FormGeneratorController } from './form-generator.controller';

@Module({
  providers: [FormGeneratorService],
  controllers: [FormGeneratorController]
})
export class FormGeneratorModule {}
