import { Module } from '@nestjs/common';
import { FormGeneratorService } from './form-generator.service';

@Module({
  providers: [FormGeneratorService]
})
export class FormGeneratorModule {}
