import { UserDTO, UserEditableDTO } from '@user/dto';
import { Crypto } from '@libs/crypto';
import { UserRepository } from './repository.domain';
import { RFC4122 } from '@libs/rfc4122';

const database: Array<UserDTO> = [
  {
    id: 'uuid-1',
    name: 'John Doe 1',
    email: 'XXXXXXXXXXXX',
    password: 'encrypt',
    permission: 0,
  },
  {
    id: 'uuid-2',
    name: 'John Doe 2',
    email: 'XXXXXXXXXXXX',
    password: 'encrypt',
    permission: 0,
  },
];

export class InMemoryRepository implements UserRepository {
  private readonly crypto = new Crypto();
  private readonly rfc4122 = new RFC4122();

  async create(userEditableDTO: UserEditableDTO): Promise<UserDTO> {
    const userDTO = { id: this.rfc4122.generate(), ...userEditableDTO };

    userDTO.password = await this.crypto.encrypt(userDTO.password);
    database.push(userDTO);

    return userDTO;
  }

  async getAll(): Promise<UserDTO[]> {
    return database;
  }

  async findById(id: string): Promise<UserDTO> {
    return database.find((user) => user.id === id);
  }

  async updateById(id: string, updatedData: UserEditableDTO): Promise<UserDTO> {
    const { indexDB, user } = this.findUserOrError(id);

    database[indexDB] = {
      ...user,
      ...updatedData,
    };

    return database[indexDB];
  }

  async removeById(id: string): Promise<UserDTO> {
    const { indexDB, user } = this.findUserOrError(id);

    database.splice(indexDB, 1);

    return user;
  }

  private findUserOrError(id: string) {
    const userIndx = database.findIndex((user) => user.id === id);

    if (userIndx === -1) throw new Error('User not found');

    return {
      indexDB: userIndx,
      user: database[userIndx],
    };
  }
}
