export const createProduct = (
    id: string | number,
    producto: string,
    esNuevo: boolean,
    stock?: number,
) => {
    return {
        id, 
        producto,
        stock: stock ?? 10,
        esNuevo: esNuevo ?? true,
    }
}

/*problemas de ||
puede dar errores con: '', 0, false
interpreta todo lo vacio como false

solución: ??
solo toma los undefined o null
*/

const p1 = createProduct(1, 'Microondas', false, 0);
console.log(p1);

const p2 = createProduct(2, 'Bicicleta', true, 1);
console.log(p2);

const p3 = createProduct(3, 'Pistola', false);
console.log(p3);