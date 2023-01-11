import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsDateString()
  name: string;

  @IsString()
  description: string;
}
