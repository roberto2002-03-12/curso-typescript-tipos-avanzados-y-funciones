import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductByTitleDto } from './product.dts';

export const productsService: Product[] = [];

export const addProductArray = (product: CreateProductDto): Product => {
    //definir los valores faltantes antes de enviarlo
    const newProduct = {
        ...product,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: product.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        }
    }
    productsService.push(newProduct);
    return newProduct;
};
//Product['id'] remplaza a string para que así si se cambia algun valor entonces no va afectar el código, con excepciones
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
    //busco el index según por id
    const index = productsService.findIndex(product => product.id === id);
    //obtengo los antiguos valores
    const prevData = productsService[index];
    //hago el cambio
    productsService[index] = {...prevData, ...changes}

    return productsService[index];
};

export const listProducts = () => {
    console.log(productsService);
};

export const filterByTitle = (titleQuery: FindProductByTitleDto): Product[] => {
    const result = productsService.filter(product => product.title == titleQuery.title);
    console.log(result);
    return result;
};

export const findById = (id: string) => {
    const result = productsService.find(product => product.id == id);
    console.log(result);
    return result;
};

export const deleteById = (id: string) => {
    //buscar index según el id
    const indexObject = productsService.findIndex(product => product.id == id);
    //si se encontro entonces eliminarlo
    if (indexObject !== -1) {
        productsService.splice(indexObject, 1);
        return 'Eliminado correctamente';
    }

    return 'El producto no se encontro, por lo tanto no se puede eliminar';
};