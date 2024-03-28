import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid';
import { UpdateCarDto } from './dtos/update-car.dto';
import { CreateCarDto } from './dtos/car.dto';
import { Car } from './interfaces/car.interface';


@Injectable()
export class CarsService {
        
    private cars: Car[];


    getAllCars(){
        return this.cars;
    }

    getCarById(id: string){
        const car = this.cars.find(car => car.id === id )
        
        if(!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car
    }

    createCar(carDto: CreateCarDto){
        const newCar: Car = {
            id: uuid(),
            ...carDto
        }
        const index = this.cars.push(newCar) - 1;
        return this.cars[index]
    }

    deleteCar(id: string){
        const car = this.getCarById(id)
        if(!car) throw new NotFoundException
        const index = this.cars.indexOf(car);     
        this.cars.splice(index, 1)
    }

    updateCar(id: string, carDto: UpdateCarDto){
        let carBD = this.getCarById(id)
        this.cars = this.cars.map(car =>{
            if(car.id === id ){
                carBD = {...carBD, ...carDto}
                return carBD
            }
            return car
        })
        return carBD
    }

    fillCarsWithSeedData( cars: Car[] ){
        this.cars = cars;
    }
}
