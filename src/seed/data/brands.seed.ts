import { Brand } from "src/brands/entities/brand.entity";
import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid} from 'uuid';

export const BRANDS_SEED: Brand[] = [
    { id: uuid(), name: "Tesla", createdAt: new Date().getTime() },
    { id: uuid(), name: "NASA", createdAt: new Date().getTime() },
    { id: uuid(), name: "OpenAI", createdAt: new Date().getTime() },
    { id: uuid(), name: "OpenMind", createdAt: new Date().getTime() }    
]