import { z } from "zod";
import { createPosterSchema } from "../schemas/posterSchema";
import { carModelSchema } from '../schemas/carModelSchema';
import { IUser } from './userInterfaces';

export type ICreatePoster = z.infer<typeof createPosterSchema>;

export interface IEditPoster {
  brand: string;
  model: string;
  year: string;
  fuel_type: string;
  kilometers: number;
  color: string;
  fipe_price: number;
  price: number;
  description: string;
  images: IImages;
}

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
    fuel_type: string;
    kilometers: number;
    color: string;
    fipe_price: number;
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

  export interface IKenzieAPICar {
    id: string;
    brand: string;
    model: string;
    year: string;
    fuel: string;
    kilometers: number;
    value: number;
    }

export type IModelCar = z.infer<typeof carModelSchema>;
