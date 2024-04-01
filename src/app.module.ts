import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_ATLAS)
    //MongooseModule.forRoot(process.env.MONGODB_CONNECTION_COMPASS)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }