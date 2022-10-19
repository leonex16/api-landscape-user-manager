import { v4 as uuidv4 } from 'uuid';
import { uuidValidate } from 'uuid';
import { RFC4122 } from './rfc4122.domain';

export class UUID implements RFC4122 {
  generate(): string {
    return uuidv4();
  }

  validate(uuid: string): boolean {
    return uuidValidate(uuid);
  }
}
