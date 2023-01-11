import { PartialType } from '@nestjs/swagger';
import { CreateAnnualBillingDto } from './create-annual-billing.dto';

export class UpdateAnnualBillingDto extends PartialType(
  CreateAnnualBillingDto,
) {}
