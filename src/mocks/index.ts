import { IMockedCar, IMockedUser } from "../interfaces/mocksInterfaces";

export const mockedUser: IMockedUser = {
  name: "Maria Souza",
  is_seller: false,
  description: `Uma pessoa incrível com interesses diversos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem soluta
  molestias voluptates veniam consequatur sint officia aperiam dolorum nobis.`,
  id: "9d931a02-a54d-487e-b6e4-70323edecd6e",
  email: "maria.souza@email.com",
  password: "1234",
};

export const mockedUser2: IMockedUser = {
  name: "Pedro Alves",
  is_seller: true,
  description: `Olá! Sou o Pedro Alves e tenho uma loja de artigos esportivos. Venha conferir nossa seleção de produtos de alta qualidade para sua prática esportiva. Estamos sempre prontos para atendê-lo e oferecer a melhor experiência de compra.`,
  id: "e7b3a832-1b6f-4f8e-9ab2-7218e5e9e0ae",
  email: "pedro.alves@example.com",
  password: "1234",
};

export const mokedUserList = [mockedUser, mockedUser2, mockedUser, mockedUser];

export const mockedCarPost: IMockedCar = {
  user: mockedUser2,
  brand: "Ford",
  model: "Mustang GT",
  year: "2023",
  fuelType: "Gasoline",
  kilometers: 1500,
  color: "blue",
  fipePrice: 135000.0,
  price: 125000.0,
  description: `Amazing sports car with powerful performance. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, nisl sit amet sollicitudin facilisis, purus enim auctor ex, non pulvinar leo enim in justo.`,
  isPublished: true,
  createdAt: new Date().toISOString(),
  images: [
    {
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWU9OU5KBtP-eM544C3QMceBUtv4fvasBzgzrCZhELB0xlg8hf5UsJiyKinxjf2weEQeHRDbHSt2nmJkdagkJGakMvVKoSpjRirK0RIKgU2jG7XmrD0udQBMam7jMX0MjIr000l820penHpgbfClRHI6m8YQKS7W9lypdojeoeRkeMQif553-spgsz/s600/pace-car-1.jpg",
    },
    {
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWU9OU5KBtP-eM544C3QMceBUtv4fvasBzgzrCZhELB0xlg8hf5UsJiyKinxjf2weEQeHRDbHSt2nmJkdagkJGakMvVKoSpjRirK0RIKgU2jG7XmrD0udQBMam7jMX0MjIr000l820penHpgbfClRHI6m8YQKS7W9lypdojeoeRkeMQif553-spgsz/s600/pace-car-1.jpg",
    },
    {
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWU9OU5KBtP-eM544C3QMceBUtv4fvasBzgzrCZhELB0xlg8hf5UsJiyKinxjf2weEQeHRDbHSt2nmJkdagkJGakMvVKoSpjRirK0RIKgU2jG7XmrD0udQBMam7jMX0MjIr000l820penHpgbfClRHI6m8YQKS7W9lypdojeoeRkeMQif553-spgsz/s600/pace-car-1.jpg",
    },
  ],
  comments: [
    {
      content: "This car is awesome!",
      createdAt: new Date().toISOString().split("T")[0],
      user: {
        name: "John Smith",
      },
    },
    {
      content: "I love the design of this car!",
      createdAt: new Date().toISOString().split("T")[0],
      user: {
        name: "Emily Johnson",
      },
    },
  ],
};

export const mockedCarPost2: IMockedCar = {
  user: mockedUser2,
  brand: "Toyota",
  model: "Camry",
  year: "2022",
  fuelType: "Hybrid",
  kilometers: 5000,
  color: "silver",
  fipePrice: 80000.0,
  price: 75000.0,
  description: `Sleek and reliable sedan with excellent fuel efficiency. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tortor maximus, accumsan lectus at, tincidunt elit.`,
  isPublished: true,
  createdAt: new Date().toISOString(),
  images: [
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
  ],
  comments: [
    {
      content: "Great car for daily commuting!",
      createdAt: new Date().toISOString().split("T")[0],
      user: {
        name: "Sarah Thompson",
      },
    },
    {
      content: "I highly recommend this car!",
      createdAt: new Date().toISOString().split("T")[0],
      user: {
        name: "Michael Davis",
      },
    },
  ],
};
export const mockedCarPost3: IMockedCar = {
  user: mockedUser2,
  brand: "Toyota",
  model: "Corola",
  year: "2021",
  fuelType: "Hybrid",
  kilometers: 5000,
  color: "silver",
  fipePrice: 80000.0,
  price: 75000.0,
  description: `Sleek and reliable sedan with excellent fuel efficiency. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tortor maximus, accumsan lectus at, tincidunt elit.`,
  isPublished: true,
  createdAt: new Date().toISOString(),
  images: [
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
    {
      url: "https://revistacarro.com.br/wp-content/uploads/2022/05/Camry-hibrido_2.jpg",
    },
  ],
  comments: [
    {
      content: "Great car for daily commuting!",
      createdAt: new Date().toISOString().split("T")[0],
      user: {
        name: "Sarah Thompson",
      },
    },
    {
      content: "I highly recommend this car!",
      createdAt: new Date().toISOString().split("T")[0],
      user: {
        name: "Michael Davis",
      },
    },
  ],
};
export const MockedCarPostList = [
  mockedCarPost,
  mockedCarPost2,
  mockedCarPost,
  mockedCarPost3,
];
