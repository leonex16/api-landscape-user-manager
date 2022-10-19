import { Test, TestingModule } from '@nestjs/testing';
import { UserCRUDService } from './crud.service';

// TODO: Clear Test Scope
describe.only('UserCRUDService', () => {
  let service: UserCRUDService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCRUDService],
    }).compile();

    service = module.get<UserCRUDService>(UserCRUDService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Method Create', () => {
    it('should return the user sent plus his id', async () => {
      const userDTO = {
        name: 'John Doe 3',
        email: 'XXXXXXXXXXXX',
        password: 'encrypt',
        permission: 1,
      };

      const userCreated = await service.create(userDTO);

      expect(userCreated.id).toBeTruthy();
      expect(userCreated.name).toEqual(userDTO.name);
      expect(userCreated.email).toEqual(userDTO.email);
    });

    it('should return encrypted the user password', async () => {
      const userDTO = {
        name: 'John Doe 3',
        email: 'XXXXXXXXXXXX',
        password: 'encrypt',
        permission: 1,
      };

      const userCreated = await service.create(userDTO);

      expect(userCreated.password).not.toEqual(userDTO.password);
    });
  });

  describe('Method Find All', () => {
    it('should return all users', async () => {
      const users = await service.findAll();

      expect(users).toHaveLength(4);
    });
  });

  describe('Method Find One', () => {
    it('should return just one user', async () => {
      const idToFind = 'uuid-1';
      const user = await service.findOne(idToFind);

      expect(user.id).toBe(idToFind);
    });
  });

  describe('Method Update', () => {
    it('should return the user updated', async () => {
      const idToUpdate = 'uuid-1';
      const userEditableDTO = {
        name: 'John Doe Updated',
        email: 'janedoe@gmail.com',
        password: 'encrypt',
        permission: 1,
      };

      const userUpdated = await service.update(idToUpdate, userEditableDTO);

      expect(idToUpdate).toEqual(userUpdated.id);
      expect(userEditableDTO.name).toEqual(userUpdated.name);
      expect(userEditableDTO.email).toEqual(userUpdated.email);
    });
  });

  describe('Method Remove', () => {
    it('should return the same user sent', async () => {
      const idToFDelete = 'uuid-1';
      const userRemoved = await service.remove(idToFDelete);

      expect(userRemoved.id).toBe(idToFDelete);
    });
  });
});
