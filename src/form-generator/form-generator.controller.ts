// src/form-generator/form-generator.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { FormGeneratorService } from './form-generator.service';
import { FormConfigDto } from 'src/dto/form-config.dto';

@Controller('form-generator')
export class FormGeneratorController {
  constructor(private readonly formGeneratorService: FormGeneratorService) {}

  @Post('generate')
  generateForm(@Body() config: FormConfigDto): { message: string } {
    const result = this.formGeneratorService.generateForm(config);
    return { message: result };
  }
}
