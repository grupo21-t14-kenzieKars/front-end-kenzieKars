export interface IMockedUser {
  name: string;
  is_seller: boolean;
  description: string;
  id: string;
  email: string;
  password: string;
}

export interface IMockedCar {
  id: string;
  user: IMockedUser;
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
  images: iImages;
  comments: Array<{
    content: string;
    createdAt: string;
    user: { name: string };
  }>;
}

interface iImages {
  one: string
  two: string | null
  three: string | null
  four: string | null
  five: string | null
  six: string | null
}