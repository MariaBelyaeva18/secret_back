import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './dto/message.dto';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('message')
  async saveMessage(@Body() dto: MessageDto) {
    return this.messageService.saveMessage(dto);
  }
}
