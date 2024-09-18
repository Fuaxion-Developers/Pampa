export class productDto {
  name: string;
  price: number;
  stock: number;
}

export class productWhitTypeDto extends productDto {
  category: string;
}
