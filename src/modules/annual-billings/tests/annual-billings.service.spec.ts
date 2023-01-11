import { Test, TestingModule } from '@nestjs/testing';
import { AnnualBillingsService } from '../annual-billings.service';

describe('AnnualBillingsService', () => {
  let service: AnnualBillingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnualBillingsService],
    }).compile();

    service = module.get<AnnualBillingsService>(AnnualBillingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
