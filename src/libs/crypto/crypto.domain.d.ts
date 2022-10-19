export interface Crypto {
  encrypt(dataUnencryted: string): Promise<string>;
  compare(dataUnencryted: string, dataEncrypted: string): Promise<boolean>;
}
