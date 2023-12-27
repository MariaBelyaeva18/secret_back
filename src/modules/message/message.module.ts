import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { PgModule } from '../database/db.module';

@Module({
  imports: [PgModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
