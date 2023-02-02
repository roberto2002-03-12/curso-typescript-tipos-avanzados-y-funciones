enum Tallas {
    Small = 'S',
    Medium = 'M',
    Large = 'L',
    ExtremeLarge = 'XL'
}

type Sizes = 'S' | 'M' | 'L' | 'XL';
type ProductArray = string | number;

/*
type Product = {
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
}
*/

interface Product {
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
}

const products: Product[] = [];

products.push({
    id: 1,
    title: 'Polo',
    createdAt: new Date(),
    stock: 30,
    size: Tallas.Small
});

const addProduct = (product: Product) => {
    products.push(product);
};

addProduct({
    id: 2,
    title: 'Pantalon',
    createdAt: new Date(),
    stock: 50,
    size: Tallas.Small
});

console.log(products);

/*
una interface te pide un cuerpo, mientras que un type puede ser un cuerpo o
de esta manera type Sizes = 'S' | 'M' | 'L' | 'XL'; type ProductArray = string | number;
de una sola linea. También otra cosa distinta es que interface tiene extend
*/