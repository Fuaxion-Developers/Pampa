import { v4 as uuidv4 } from 'uuid';
export class OrderDetailDto {
  order: uuidv4;
  product: string;
  quantity: number;
}
