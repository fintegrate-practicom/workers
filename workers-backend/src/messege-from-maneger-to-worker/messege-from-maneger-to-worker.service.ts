import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { RabbitPublisherService } from 'src/rabbit-publisher/rabbit-publisher.service';
@Injectable()
export class MessegeFromManegerToWorkerService {
    constructor(private readonly rabbitPublisherService: RabbitPublisherService) {}

    async messegefrommanegertoworker(pattern:string,data:any):Promise<void>{
        const message={
            pattern,
            data
        }
       await this.rabbitPublisherService.publishMessageToCommunication(message)


 }}

