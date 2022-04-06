import faker from '@faker-js/faker';

import { CreateProductDto } from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  //data.id = 'asdas',  //no se puede cambiar el id, es readonly

  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category:{
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: string, changes: Product) => {
  //code
}

export const deleteProduct = (id: string) => {
  //code
}

export const getProduct = (id: string) => {
  //code
}

export const searchProduct = (id: string) => {
  //code
}
