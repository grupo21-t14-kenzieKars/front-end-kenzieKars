import { z } from 'zod';
import { createPosterSchema } from "../schemas/createPosterSchema";
import { carModelSchema } from '../schemas/carModelSchema';
import { IUser } from './userInterfaces';

export type ICreatePoster = z.infer<typeof createPosterSchema>;

export interface INewPoster extends ICreatePoster{
    id: string,
    createdAt: string,
}

export interface IImages {
    one: string
    two: string | null
    three: string | null
    four: string | null
    five: string | null
    six: string | null
  }

export interface IAllCars {
    id: string;
    user: IUser;
    brand: string;
    model: string;
    year: string;
    fuelType: string;
    kilometers: number;
    color: string;
    fipePrice: number;
    price: number;
    description: string;
    isPublished: boolean;
    createdAt: string;
    images: IImages;
    comments: Array<{
      content: string;
      createdAt: string;
      user: { name: string };
    }>;
  }

export type IModelCar = z.infer<typeof carModelSchema>;