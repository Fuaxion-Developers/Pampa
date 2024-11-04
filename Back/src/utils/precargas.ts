import { Logger } from '@nestjs/common';
import { OrderStatusService } from 'src/order-status/order-status.service';
import { CategoriesService } from 'src/products/categories/categories.service';
import { ProductsService } from 'src/products/products.service';
import { SubCategoriesService } from 'src/subcategories/subcategory.service';
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
      height: 10,
      width: 10,
    },
    {
      name: 'NVD 62',
      price: 999,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
      category: 'Alto relieve',
      height: 10,
      width: 10,
    },
    {
      name: 'NVD 61',
      price: 799,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894164/whatsapp-image-2024-09-25-at-11-35-42-453962c57076da7ff517272751644862-320-0_ushsql.webp',
      category: 'Alto relieve',
      height: 10,
      width: 10,
    },
    {
      name: 'NVD 64',
      price: 399,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894164/whatsapp-image-2024-09-25-at-11-35-43-40331840f898d0214e17272750219006-320-0_n5ocae.webp',
      category: 'Alto relieve',
      height: 10,
      width: 10,
    },
    {
      name: 'AirPods Pro',
      price: 249,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
      category: 'Accesorios',
      height: 10,
      width: 10,
    },
    {
      name: 'HomePod mini',
      price: 99,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
      category: 'Numerador',
      height: 10,
      width: 10,
    },
    {
      name: 'iPhone 12 Pro',
      price: 999,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
      category: 'Celebraciones',
      height: 10,
      width: 10,
    },
    {
      name: 'iPad Air',
      price: 599,
      description: 'Producto destacado',
      image_url:
        'https://res.cloudinary.com/dkobjvdgn/image/upload/v1727894172/whatsapp-image-2024-09-25-at-11-35-44-ccc2952de44c1c05b717272753504201-320-0_qbnk4g.webp',
      category: 'Oron',
      height: 10,
      width: 10,
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
    {
      name: 'Alto relieve',
      image: 'https://example.com/images/alto-relieve.jpg',
    },
    {
      name: 'Bajo relieve',
      image: 'https://example.com/images/bajo-relieve.jpg',
    },
    {
      name: 'Accesorios',
      image: 'https://example.com/images/accesorios.jpg',
    },
    {
      name: 'Navidad 24/25',
      image: 'https://example.com/images/navidad-24-25.jpg',
    },
    {
      name: 'Vegetales (VG)',
      image: 'https://example.com/images/vegetales-vg.jpg',
    },
    {
      name: 'Verduras (VD)',
      image: 'https://example.com/images/verduras-vd.jpg',
    },
    {
      name: 'Sets',
      image: 'https://example.com/images/sets.jpg',
    },
    {
      name: 'Sin Stock',
      image: 'https://example.com/images/sin-stock.jpg',
    },
    {
      name: 'Palafrases',
      image: 'https://example.com/images/palafrases.jpg',
    },
    {
      name: 'Numerador',
      image: 'https://example.com/images/numerador.jpg',
    },
    {
      name: 'Celebraciones',
      image: 'https://example.com/images/celebraciones.jpg',
    },
    {
      name: 'Oron',
      image: 'https://example.com/images/oron.jpg',
    },
  ];
  const categoriesService = app.get(CategoriesService);
  try {
    await categoriesService.getAll();
    Logger.warn('Categories already created');
  } catch (error) {
    for (const category of categoriesToPreload) {
      const categoryExistente = await categoriesService.getByName(category);
      if (categoryExistente) continue;
      const categorie = await categoriesService.createProductType(category);
      categoriesIds.push(categorie.id);
    }
    Logger.verbose('Categories created');
    console.log(categoriesService.getAll());
  }
};

export const SubCategoriesPreLoad = async (app) => {
  const categories = {
    'Alto Relieve': [
      'Línea Roja (RJ)',
      'Línea Verde (VE)',
      'Línea Azul (AZ)',
      'Línea Violeta (VI)',
      'Línea Amarilla (AM)',
      'Línea Naranja (NJ)',
      'Línea Patrones (PTR)',
      'Línea Oro (ORO)',
      'Línea Botánica (BTG)',
      'Línea Botánica Gigante (BTGG)',
      'Línea Botánica Pequeña (BT)',
      'Pintalunas',
      'Calendario',
      'Scrap (SC)',
      'Línea Gatitos (GT)',
    ],
    'Bajo Relieve': [
      'Bajo Relieve Amarillo (BRAM)',
      'Bajo Relieve Naranja (BRNJ)',
      'Línea Puntilla (PTL)',
      '- PTL 1',
      '- PTL 2',
      '- PTL 3',
      'Oro Bajo Relieve (OROBR)',
      'Etiqueta Bajo Relieve Grande (ETQG)',
      'Etiqueta Bajo Relieve Pequeña (ETQP)',
    ],
    Accesorios: ['Metacadores', 'Capafácil', 'Pintalunas'],
    'Navidad 24/25': [],
    'Vegetales (VG)': ['LO NUEVO'],
    'Verduras (VD)': [],
    Sets: [
      'Textura Fácil Grande (TFG)',
      'Textura Fácil Pequeña (TFP)',
      'Etiquetas desmontables (ETD)',
      'Etiquetas Recambio (ETR)',
    ],
    'Sin Stock': [
      'Plantillas Navidad (NVDP)',
      'Plantillas (Stencil)',
      'Plantillas Naranja (NJP)',
      'Plantillas Amarillas (AMP)',
      'Plantillas Violeta (VIP)',
      'Plantillas Azules (AZP)',
      'Plantillas Verdes (VEP)',
      'Plantillas Rojas (RJP)',
      'Plantillas Azules (AZP)',
      'Plantillas Violeta (VIP)',
      'Plantillas Amarillas (AMP)',
      'Plantillas Naranja (NJP)',
    ],
    Palafrases: ['Palafrases M (PFM)', 'Palafrases S (PFS)', 'Palafrases Mini'],
    Numerador: ['Números 03 Alto', 'Números 03 Bajo'],
    Celebraciones: ['PASCUAL (PSC)', '- PSC 01', '- PSC 02', '- PSC 03'],
    Oron: [],
  };
  const subCategoriesService = app.get(SubCategoriesService);
  try {
    await subCategoriesService.getAll();
    Logger.warn('SubCategories already created');
  } catch (error) {
    for (const category in categories) {
      for (const subCategory of categories[category]) {
        const subCategoryExistente =
          await subCategoriesService.getByCategorieName(subCategory);
        if (subCategoryExistente) continue;
        const subCategorie = await subCategoriesService.create({
          name: subCategory,
          category: category,
        });
        categoriesIds.push(subCategorie.id);
      }
    }
    Logger.verbose('SubCategories created');
  }
};
