import { Test, TestingModule } from '@nestjs/testing';
import { FormGeneratorController } from './form-generator.controller';

describe('FormGeneratorController', () => {
  let controller: FormGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormGeneratorController],
    }).compile();

    controller = module.get<FormGeneratorController>(FormGeneratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
