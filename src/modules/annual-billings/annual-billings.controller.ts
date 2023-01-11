import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnnualBillingsService } from './annual-billings.service';
import { CreateAnnualBillingDto } from './dto/create-annual-billing.dto';
import { UpdateAnnualBillingDto } from './dto/update-annual-billing.dto';

@Controller('annual-billings')
export class AnnualBillingsController {
  constructor(private readonly annualBillingsService: AnnualBillingsService) {}

  @Post()
  create(@Body() createAnnualBillingDto: CreateAnnualBillingDto) {
    return this.annualBillingsService.create(createAnnualBillingDto);
  }

  @Get()
  findAll() {
    return this.annualBillingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.annualBillingsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnnualBillingDto: UpdateAnnualBillingDto,
  ) {
    return this.annualBillingsService.update(+id, updateAnnualBillingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.annualBillingsService.remove(+id);
  }
}
