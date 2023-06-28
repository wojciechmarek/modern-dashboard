import { Language, Theme } from '@md/common/enums';

export class ProfileDto {
  constructor(
    public language: Language,
    public theme: Theme,
    public permissions: string[],
    public email: string
  ) {}
}
