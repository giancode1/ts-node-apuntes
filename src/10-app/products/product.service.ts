import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  //data.id = 'asdas',  //no se puede cambiar el id, es readonly
  products.push(data);
}
