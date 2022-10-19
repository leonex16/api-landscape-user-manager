import { Injectable } from '@nestjs/common';
import { UserEditableDTO } from '@user/dto';
import { UserRepository } from '@user/repository';
// import type { UserRepository } from '@user/repository/repository.domain';

// TODO: Inject as dependency
const repository = new UserRepository();

@Injectable()
export class UserCRUDService {
  async create(userEditableDTO: UserEditableDTO) {
    return repository.create(userEditableDTO);
  }

  async findAll() {
    return repository.getAll();
  }

  async findOne(id: string) {
    return repository.findById(id);
  }

  async update(id: string, userUpdated: UserEditableDTO) {
    return repository.updateById(id, userUpdated);
  }

  async remove(id: string) {
    return repository.removeById(id);
  }
}
