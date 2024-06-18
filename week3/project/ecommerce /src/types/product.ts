export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  isLiked: boolean;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
