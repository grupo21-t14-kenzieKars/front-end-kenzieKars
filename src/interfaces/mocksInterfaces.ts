export interface IMockedUser {
  name: string;
  is_seller: boolean;
  description: string;
  id: string;
  email: string;
  password: string;
}

export interface IMockedCar {
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
  images: Array<{ url: string }>;
  comments: Array<{
    content: string;
    createdAt: string;
    user: { name: string };
  }>;
}
