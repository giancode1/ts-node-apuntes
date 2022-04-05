//Parámetros opcionales y nullish-coalescing: es asignar valores por defecto

export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,  //parametors opcionales al final
) => {
  return {
    id,
    // 0 === false
    // '' === false
    // false === false
    // stock: stock || 10,   //hay problemas si stock en verdad es 0, coje 10
    // isNew: isNew || true,  //hay problemas si isNew en verdad es false, coje true
    stock: stock ?? 10,     //nullish-coalescing, si stock es null, coje 10
    isNew: isNew ?? true,
    //HAY MEJOR SOLUCION EN EL EJ SIGUIENTE
  };
}

const p1 = createProduct(1, true, 12);
console.log('p1', p1)

const p2 = createProduct(2);
console.log('p2', p2)

const p3 = createProduct(3, false, 0);
console.log('p3', p3)


