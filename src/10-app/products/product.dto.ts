import { Product } from "./product.model";


export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'> //solo se pueden tomar estos atributos

//type UpdateProductDto = Partial<Product>;

//Partial lo deja todo como opcional
export interface UpdateProductDto extends Partial<CreateProductDto>{}

//el contrario de Partial es Required, lo deja todo como requerido, obligatorio
type example2 = Required<Product>;



export interface FindProductDto extends Readonly<Partial<Product>>{} //Readonly es para que no se pueda modificar el objeto

type example3 = Readonly<Product>;
