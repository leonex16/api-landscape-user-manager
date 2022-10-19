import * as bcrypt from 'bcrypt';
import { Crypto } from './crypto.domain';

export class Bcrypt implements Crypto {
  async encrypt(dataUnencryted: string): Promise<string> {
    const saltOrRounds = await bcrypt.genSalt();

    return bcrypt.hash(dataUnencryted, saltOrRounds);
  }

  async compare(
    dataUnencryted: string,
    dataEncrypted: string,
  ): Promise<boolean> {
    return bcrypt.compare(dataUnencryted, dataEncrypted);
  }
}
