export interface RFC4122 {
  generate(): string;
  validate(uuid: string): boolean;
}
