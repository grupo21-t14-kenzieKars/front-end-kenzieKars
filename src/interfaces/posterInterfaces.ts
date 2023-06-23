import { z } from "zod";
import { createPosterSchema } from "../schemas/createPosterSchema";
import { carModelSchema } from "../schemas/carModelSchema";

export type ICreatePoster = z.infer<typeof createPosterSchema>;

export interface INewPoster extends ICreatePoster {
  id: string;
  createdAt: string;
}

export type IModelCar = z.infer<typeof carModelSchema>;

export interface ICarByUser {
  name: string;
  description: string;
  cars: INewPoster;
}
