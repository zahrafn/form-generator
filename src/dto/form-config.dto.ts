// src/form-generator/dto/form-config.dto.ts
export class FormConfigDto {
  outputFolder: string;
  formName: string;
  fields: Array<{
    name: string;
    type: string;
    label: string;
    required?: boolean;
    placeholder?: string;
  }>;
}
