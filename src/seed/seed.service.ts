import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly cars: CarsService,
    private readonly brands: BrandsService
  ){}
  populateDB(){
    this.cars.fillCarsWithSeedData(CARS_SEED);
    this.brands.fillBrandsWithSeedData(BRANDS_SEED);
    return {
      status: 200,
      message: 'Seed executed'
    }
  }
}
