export interface Iproduct {
  id: string;
  imageCover: string;
  price: number;
  description: string;
  ratingsAverage: number;
  title: string;
  category: {
    name: string;
  };
}
