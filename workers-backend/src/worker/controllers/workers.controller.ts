import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  Query,
  Body,
  Post,
  ValidationPipe,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { WorkersService } from '../services/workers.service';
import { Employee } from '../../schemas/employee.entity';
import { TransformDataStructure } from '../../transformDataStructure/convertData';
import { Request, Response } from 'express';
import { workerValidationsSchema } from '../validations/worker.validations.schema';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

@Controller('workers')
export class WorkersController {
  private readonly logger = new Logger(WorkersController.name);

  constructor(private readonly workersService: WorkersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Query('businessId') businessId: string): Promise<Employee[]> {
    return this.workersService.findAll(businessId);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('employee/:id')
  getWorker(@Param('id') id: string) {
    return this.workersService.getEmployee(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('data')
  @UseInterceptors(TransformDataStructure)
  async getData(@Body() req: Request, @Body() res: Response): Promise<void> {
    res.json({ message: 'Original data' });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('company/:companyId')
  async get(@Param('companyId') id: string): Promise<Employee[]> {
    const result = await this.workersService.findAllByBusinessId(id);
    return result;
  }

  @ApiOperation({ summary: 'Add a new employee' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        businessId: { type: 'string' },
        userId: { type: 'string' },
        workerCode: { type: 'string' },
        createdBy: { type: 'string' },
        roleId: { type: 'string' },
        position: { type: 'string' },
      },
    },
  })

  @UseGuards(AuthGuard('jwt'))
  @Post('')
  async create(
    @Body(
      new ValidationPipe({
        exceptionFactory: (errors) => {
          Logger.log('error validation! '+errors);
          return new HttpException(errors, HttpStatus.BAD_REQUEST);
        },
      }),
    )
    requestBody: workerValidationsSchema,
  ): Promise<Employee> {
    try {
      const result = await this.workersService.createEmployee(requestBody);
      this.logger.log("good");
      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}


function AuthGuard(arg0: string): Function | import("@nestjs/common").CanActivate {
  throw new Error('Function not implemented.');
}

