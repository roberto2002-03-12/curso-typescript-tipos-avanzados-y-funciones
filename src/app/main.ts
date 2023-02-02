import { faker } from '@faker-js/faker';
import { addProductArray, updateProduct, productsService, filterByTitle } from "./products/product.service";
import { Tallas } from "./products/product.model";

for (let i = 0; i < 50; i++) {
    addProductArray({
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.color.human(),
        price: parseInt(faker.commerce.price(), 10),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(),
        title: faker.commerce.productName(),
        stock: faker.datatype.number({min: 10, max: 100}),
        size: Tallas.Large,
        categoryId: faker.datatype.uuid()
    });
}

/*
addProductArray({
    id: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({min: 10, max: 100}),
    size: Tallas.Large,
    category: {
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        name: faker.commerce.department(),
    }
});
*/

console.log(productsService);

const product = productsService[0];

updateProduct(product.id, {
    title: 'New York Times',
    stock: 20
});

filterByTitle({
    title: 'New York Times'
});

