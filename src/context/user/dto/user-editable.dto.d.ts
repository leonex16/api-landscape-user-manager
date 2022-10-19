import { UserDTO } from './user.dto';

export type UserEditableDTO = Omit<UserDTO, 'id'>;
