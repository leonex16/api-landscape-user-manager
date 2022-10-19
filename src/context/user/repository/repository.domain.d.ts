import type { Repository } from '@core/repository';
import { UserDTO, UserEditableDTO } from '@user/dto';

export type UserRepository = Repository<UserDTO, UserEditableDTO>;
