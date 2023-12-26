import { Inject, Injectable } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
  // eslint-disable-next-line no-empty-function
  constructor(@Inject('PG_CONNECTION') private conn: any) {}

  async saveMessage(dto: MessageDto): Promise<string> {
    return this.conn.query(
      'INSERT INTO messages (message) VALUES ($1)',
      [dto.message],
    );
  }
}
