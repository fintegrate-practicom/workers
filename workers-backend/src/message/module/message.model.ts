import { Module } from '@nestjs/common';
import { MessagesService } from '../services/messages.service';
import { MessagesController } from '../controllers/messages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from 'src/schemas/message.entity';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule { }