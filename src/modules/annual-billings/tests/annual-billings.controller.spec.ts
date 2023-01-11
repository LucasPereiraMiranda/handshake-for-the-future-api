import { Test, TestingModule } from '@nestjs/testing';
import { AnnualBillingsController } from '../annual-billings.controller';
import { AnnualBillingsService } from '../annual-billings.service';

describe('AnnualBillingsController', () => {
  let controller: AnnualBillingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnualBillingsController],
      providers: [AnnualBillingsService],
    }).compile();

    controller = module.get<AnnualBillingsController>(AnnualBillingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
