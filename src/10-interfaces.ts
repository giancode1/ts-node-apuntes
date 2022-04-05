//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
type Sizes = 'S' | 'M' | 'L';

// type Product = {
//   id: string | number;
//   title: string;
//   createAt: Date;
//   stock: number;
//   size: Sizes;
// }
interface Product {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'Producto 1',
  createAt: new Date(),
  stock: 10,
  size: 'S'
})

const addProduct = (product: Product): void => {
  products.push(product);
}

//las interfaces si pueden heredar de otras interfaces
interface HumanInterface {
  name: string,
  lastName: string
}
interface HeroInterface extends HumanInterface {
  superPower: string
}


