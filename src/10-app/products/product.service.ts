import faker from '@faker-js/faker';

import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';
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

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const productIndex = products.findIndex(product => product.id === id);
  const originalProduct = products[productIndex];

  const updatedProduct = {
    ...originalProduct,
    ...changes,
  }
  products[productIndex] = updatedProduct;
  return updatedProduct;

}

export const deleteProduct = (id: string) => {
  //code
}

export const getProduct = (id: string) => {
  //code
}

export const findProducts = (dto: FindProductDto): Product[] => {
  //dto.color = 'blue' //no me permite modificarlo, correcto!

  return products;
}
