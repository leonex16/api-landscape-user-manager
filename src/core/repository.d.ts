import { Optional } from './types';

export interface Repository<DTO, DTO_EDITABLE> {
  create(entity: DTO_EDITABLE): Promise<DTO>;

  getAll(): Promise<Array<DTO>>;

  findById(id: string): Promise<Optional<DTO>>;

  updateById(id: string, updatedData: DTO_EDITABLE): Promise<Optional<DTO>>;

  removeById(id: string): Promise<Optional<DTO>>;
}
