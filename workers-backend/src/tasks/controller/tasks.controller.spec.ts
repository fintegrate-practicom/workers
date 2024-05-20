import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from '../service/tasks.service';
import { CreateTaskDto } from '../../dto/createTask.dto';
import { BadRequestException } from '@nestjs/common';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: {
            createTask: jest.fn(),
          },
        },
      ],
    }).compile();
    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  describe('create', () => {
    const taskData: CreateTaskDto = {
      companyName: 'Test Company',
      managerId: '12345',
      taskName: 'Test Task',
      description: 'efvdvbgtdc',
      targetDate: '2024-05-10',
      associatedWithEmployee: 'fgnfdrtyhd',
      theUrgencyOfTheTask: 2,
    };
    it('should call service.createTask with dto', async () => {
      const spy = jest.spyOn(service, 'createTask').mockResolvedValue(taskData);
      const result = await controller.createTask(taskData);
      expect(spy).toHaveBeenCalledWith(taskData);
      expect(result).toEqual(taskData);
    });

    it('result should be equal to TaskStub', async () => {
      const taskStub = { ...taskData };
      jest.spyOn(service, 'createTask').mockResolvedValue(taskStub);
      const result = await controller.createTask(taskData);
      expect(result).toEqual(taskStub);
    });

    it('should throw BadRequestException if creation fails', async () => {
      jest
        .spyOn(service, 'createTask')
        .mockRejectedValue(new BadRequestException('Invalid data'));
      await expect(controller.createTask(taskData)).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});