// src/helpers/products.ts
import { IProduct } from '@/types';

const productsToPreLoad: IProduct[] = [
  {
    id: 1,
    name: 'NVD 41',
    price: 1000,
    description: 'Producto destacado',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894164/whatsapp-image-2024-09-26-at-07-00-32-1-db75edea35cdce1ac317273608926039-320-0_v27g8s.webp',
    categoryId: 0,
    stock: 10,
  },
  {
    id: 2,
    name: 'NVD 62',
    price: 999,
    description: 'Producto destacado',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
    categoryId: 1,
    stock: 10,
  },
  {
    id: 3,
    name: 'NVD 61',
    price: 799,
    description: 'Producto destacado',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894164/whatsapp-image-2024-09-25-at-11-35-42-453962c57076da7ff517272751644862-320-0_ushsql.webp',
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: 'NVD 64',
    price: 399,
    description: 'Producto destacado',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894164/whatsapp-image-2024-09-25-at-11-35-43-40331840f898d0214e17272750219006-320-0_n5ocae.webp',
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: 'AirPods Pro',
    price: 249,
    description: 'Producto destacado',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: 'HomePod mini',
    price: 99,
    description: 'Producto destacado',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
    categoryId: 6,
    stock: 10,
  },
  {
    id: 7,
    name: 'iPhone 12 Pro',
    price: 999,
    description: 'Producto destacado',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
    categoryId: 1,
    stock: 15,
  },
  {
    id: 8,
    name: 'iPad Air',
    price: 599,
    description: 'Producto destacado',
    image:
      'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
    categoryId: 3,
    stock: 15,
  },
];

export default productsToPreLoad;


