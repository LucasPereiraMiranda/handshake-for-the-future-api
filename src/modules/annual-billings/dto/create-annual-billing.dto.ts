import {
  IsDateString,
  IsNotEmpty,
  IsNumberString,
  IsUrl,
} from 'class-validator';

export class CreateAnnualBillingDto {
  @IsNotEmpty()
  @IsNumberString()
  billing: number;

  @IsNotEmpty()
  @IsNumberString()
  year: number;

  @IsNotEmpty()
  @IsNumberString()
  startupId: string;
}
