export class CreateUserDto {}

import { IsDateString, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateStartupDto {
  @IsNotEmpty()
  @IsDateString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsUrl()
  logoUrl?: string;

  @IsNotEmpty()
  @IsUrl()
  linkedinUrl: string;

  @IsNotEmpty()
  @IsUrl()
  facebookUrl: string;

  @IsNotEmpty()
  @IsUrl()
  instagramUrl: string;
}
