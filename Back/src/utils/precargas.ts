import { Logger } from '@nestjs/common';
import { OrderStatusService } from 'src/order-status/order-status.service';
import { CategoriesService } from 'src/products/categories/categories.service';
import { ProductsService } from 'src/products/products.service';
import { EnumOrderStatus } from 'src/users/enums/order-status.enum';

export const precargasOrderStatus = async (app) => {
  const orderStatusService = app.get(OrderStatusService);
  if ((await orderStatusService.getAll()).length === 0) {
    for (const status of Object.values(EnumOrderStatus)) {
      await orderStatusService.create({ status });
    }
    Logger.verbose('Order Status created');
  } else {
    Logger.warn('Order Status already created');
  }
};

let categoriesIds = [];

export const precargaProducts = async (app) => {
  // TODO: Precargar los productos
  const productsToPreLoad = [
    {
      name: 'NVD 41',
      price: 1000,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894164/whatsapp-image-2024-09-26-at-07-00-32-1-db75edea35cdce1ac317273608926039-320-0_v27g8s.webp',
      category: 'Alto relieve',
      stock: 10,
    },
    {
      name: 'NVD 62',
      price: 999,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
      category: 'Alto relieve',
      stock: 10,
    },
    {
      name: 'NVD 61',
      price: 799,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894164/whatsapp-image-2024-09-25-at-11-35-42-453962c57076da7ff517272751644862-320-0_ushsql.webp',
      category: 'Alto relieve',
      stock: 10,
    },
    {
      name: 'NVD 64',
      price: 399,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894164/whatsapp-image-2024-09-25-at-11-35-43-40331840f898d0214e17272750219006-320-0_n5ocae.webp',
      category: 'Alto relieve',
      stock: 10,
    },
    {
      name: 'AirPods Pro',
      price: 249,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
      category: 'Accesorios',
      stock: 10,
    },
    {
      name: 'HomePod mini',
      price: 99,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
      category: 'Numerador',
      stock: 10,
    },
    {
      name: 'iPhone 12 Pro',
      price: 999,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
      category: 'Celebraciones',
      stock: 15,
    },
    {
      name: 'iPad Air',
      price: 599,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
      category: 'Oron',
      stock: 15,
    },
  ];

  const productService = app.get(ProductsService);
  if ((await productService.getAll()) === 'No products found') {
    for (let index = 0; index < productsToPreLoad.length; index++) {
      const productoExistente = await productService.getByName(
        productsToPreLoad[index].name,
      );
      if (productoExistente) continue;
      await productService.create(productsToPreLoad[index]);
    }

    Logger.verbose('Products created');
  } else {
    Logger.warn('Products already created');
  }
};

export const precargaCategories = async (app) => {
  const categoriesToPreload = [
    'Alto relieve',
    'Bajo relieve',
    'Accesorios',
    'Navidad 24/25',
    'Vegetales (VG)',
    'Verduras (VD)',
    'Sets',
    'Sin Stock',
    'Palafrases',
    'Numerador',
    'Celebraciones',
    'Oron',
  ];

  const categoriesService = app.get(CategoriesService);
  if ((await categoriesService.getAll()).length === 0) {
    for (const category of categoriesToPreload) {
      const categoryExistente = await categoriesService.getByName(category);
      if (categoryExistente) continue;
      const categorie = await categoriesService.createProductType({
        name: category,
      });
      categoriesIds.push(categorie.id);
    }

    Logger.verbose('Categories created');
  } else {
    Logger.warn('Categories already created');
  }
};
