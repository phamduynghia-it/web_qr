export interface IProduct {
  id: number;
  name: string;
  price: number;
  tag: string;
  tagClass: string;
  imageUrl: string;
  videoUrl: string;
  detailImages: string[];
  description: string[];
  features: string[];
}