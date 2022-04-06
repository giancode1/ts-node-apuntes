import faker from '@faker-js/faker';
import { products, addProduct, updateProduct,  } from './products/product.service';

for (let index = 0; index < 10; index++) {
  addProduct({
    //id: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElements(),
    title: faker.commerce.productName(),
    //createdAt: faker.date.recent(),
    //updatedAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    // category: {
    //   id: faker.datatype.uuid(),
    //   name: faker.commerce.department(),
    //   createdAt: faker.date.recent(),
    //   updatedAt: faker.date.recent(),
    // }
    categoryId: faker.datatype.uuid()
  });
}

console.log(products);

const product0 = products[0];

const productUpdated = updateProduct(product0.id,{
  title: 'Producto 0',
  stock: 15,
  ///id: '2a',  //ya no me deja cambiar el id, correcto!
  //categoryId: '12'
})
