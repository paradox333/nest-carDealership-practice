import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private  carsService: CarsService
    ){}
    
    @Get()
    getAllCars(@Res() res: Response){
        return res.status(200).send({cars: this.carsService.getAllCars()})
    }

    @Get(':id')
    getCarById(@Res() res: Response, @Param('id', ParseUUIDPipe) id: string){
        return res.status(200).send({cars: this.carsService.getCarById(id)})
    }

    @Post()
    createCar(@Body() carDto: CreateCarDto){
        return this.carsService.createCar(carDto)
    }

    @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() carDto: UpdateCarDto){
        return this.carsService.updateCar(id, carDto)
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.deleteCar(id);
    }
}
