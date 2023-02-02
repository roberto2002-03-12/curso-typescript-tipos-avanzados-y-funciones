export const createProduct = (
    id: string | number,
    producto: string,
    esNuevo: boolean = false,
    stock: number = 10,
) => {
    return {
        id, 
        producto,
        stock: stock,
        esNuevo: esNuevo,
    }
}

//puede definir un valor default de esta manera esNuevo: boolean = false en vez de usar el ??

const p1 = createProduct(1, 'Microondas', false, 0);
console.log(p1);

const p2 = createProduct(2, 'Bicicleta', true, 1);
console.log(p2);

const p3 = createProduct(3, 'Pistola', false);
console.log(p3);