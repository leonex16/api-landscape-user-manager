import { Test, TestingModule } from '@nestjs/testing';
import { UserCRUDController } from './crud.controller';
import { UserCRUDService } from './crud.service';

describe('ListController', () => {
  let controller: UserCRUDController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCRUDController],
      providers: [UserCRUDService],
    }).compile();

    controller = module.get<UserCRUDController>(UserCRUDController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
