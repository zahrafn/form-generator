// src/form-generator/form-generator.service.ts

import * as fs from 'fs';
import * as path from 'path';

import { FormConfigDto } from 'src/dto/form-config.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FormGeneratorService {
  generateForm(config: FormConfigDto): string {
    const { formName, fields, outputFolder } = config;

    // بررسی اینکه فقط نام فایل استفاده شود، نه یک مسیر
    const sanitizedFormName = path.basename(formName);

    // ایجاد محتوای HTML فرم
    let formHtml = `<html>
<head>
  <title>${formName}</title>
</head>
<body>
  <h1>${formName}</h1>
  <form method="post">
`;

    fields.forEach((field) => {
      formHtml += `
    <label for="${field.name}">${field.label}</label><br>
    <input 
      type="${field.type}" 
      id="${field.name}" 
      name="${field.name}" 
      ${field.required ? 'required' : ''} 
      placeholder="${field.placeholder || ''}">
    <br><br>
`;
    });

    formHtml += `
    <button type="submit">Submit</button>
  </form>
</body>
</html>`;

    try {
      // ذخیره فایل در فولدر خروجی
      const outputPath = path.join(outputFolder, `${sanitizedFormName}.html`);
      fs.mkdirSync(outputFolder, { recursive: true });
      fs.writeFileSync(outputPath, formHtml, { encoding: 'utf-8' });

      return `Form generated at: ${outputPath}`;
    } catch (error) {
      console.error('Error generating form:', error.message);
      throw new Error(`Failed to generate form: ${error.message}`);
    }
  }
}
