import {
  BadRequestException, Injectable, PipeTransform,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema, private errorMessage: string) {}

  transform(value: unknown) {
    const { error } = this.schema.validate(value, { abortEarly: false });
    if (error) {
      throw new BadRequestException({
        message: this.errorMessage,
        data: error,
      });
    }
    return value;
  }
}
