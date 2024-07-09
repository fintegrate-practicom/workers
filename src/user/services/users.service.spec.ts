import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user when createUser is called', async () => {
    const mockCreateUserDto = {
      userName: 'Test User',
      userEmail: 'test@example.com',
      auth0_user_id: 'n05y7452opu',
      registeredAt: new Date('2024-12-31'),
      lastLogin: new Date('2024-12-31'),
      mobile: '0555555555',
      status: 'Married',
      dateOfBirth: new Date('2024-12-31'),
      address: {
        city: 'TV',
        street: 'Hshalom',
        num: 5,
      },
    };
    const mockUserModel = {
      save: jest.fn(() => Promise.resolve(mockCreateUserDto)),
    };

    jest.spyOn(service, 'userModel', 'get').mockReturnValue(mockUserModel as any);
    const createdUser = await service.createUser(mockCreateUserDto);
    expect(createdUser).toEqual(mockCreateUserDto);
  });

});