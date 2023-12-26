import { Module } from '@nestjs/common';
import { MessageModule } from './modules/message/message.module';

@Module({
  controllers: [],
  providers: [],
  imports: [MessageModule],

})
export class AppModule {}
