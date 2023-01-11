import { Injectable } from '@nestjs/common';
import { CreateAnnualBillingDto } from './dto/create-annual-billing.dto';
import { UpdateAnnualBillingDto } from './dto/update-annual-billing.dto';

@Injectable()
export class AnnualBillingsService {
  create(createAnnualBillingDto: CreateAnnualBillingDto) {
    return 'This action adds a new annualBilling';
  }

  findAll() {
    return `This action returns all annualBillings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} annualBilling`;
  }

  update(id: number, updateAnnualBillingDto: UpdateAnnualBillingDto) {
    return `This action updates a #${id} annualBilling`;
  }

  remove(id: number) {
    return `This action removes a #${id} annualBilling`;
  }
}
