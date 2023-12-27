import {
  Body, Controller, Get, Param, Post,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './dto/message.dto';
import { JoiValidationPipe } from '../../pipes/validation.pipe';
import * as schema from '../../schema/message.schema';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('message')
  async saveMessage(
    @Body(
      new JoiValidationPipe(
        schema.messageCreateSchema,
        'validationError',
      ),
    ) dto: MessageDto,
  ) {
    return this.messageService.saveMessage(dto);
  }

  @Get(':route')
  async getMessage(@Param('route') route: string) {
    return this.messageService.getMessage(route);
  }
}
