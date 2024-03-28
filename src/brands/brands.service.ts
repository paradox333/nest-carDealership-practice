import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime()
    }
    const index = this.brands.push(brand) - 1;
    return this.brands[index];

  }

  findAll() {
    return this.brands; 
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id) 
    if(!brand) throw new NotFoundException({message: `Brand with id ${id} not found`})
    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandBD = this.findOne(id);
    this.brands = this.brands.map( brand =>{
      if(brand.id === id){
        brand.UpdatedAt = new Date().getTime()
        brandBD = {
          ...brand,
          ...updateBrandDto
        }
        return brandBD
      }
      return brand
    });
    return brandBD
  }

  remove(id: string) {
    const brand = this.findOne(id);
    const index = this.brands.indexOf(brand)
    this.brands.splice(index, 1)
  }

  fillBrandsWithSeedData( brands: Brand[] ){
        this.brands = brands;
    }
}
