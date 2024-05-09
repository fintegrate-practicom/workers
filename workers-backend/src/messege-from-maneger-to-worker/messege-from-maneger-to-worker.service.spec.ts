import { Test, TestingModule } from '@nestjs/testing';
import { MessegeFromManegerToWorkerService } from './messege-from-maneger-to-worker.service';

describe('MessegeFromManegerToWorkerService', () => {
  let service: MessegeFromManegerToWorkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessegeFromManegerToWorkerService],
    }).compile();

    service = module.get<MessegeFromManegerToWorkerService>(MessegeFromManegerToWorkerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
