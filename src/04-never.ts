//los tipo never son funciones o variables que pueden realizar un bucle
//o puede que no retorne ningún valor. ¿Pero que pasa con las funciones que solo hace acciones?
//en ese caso seria de tipo void, para resumir un never es cuando es un loop o bota un error, pero
//no retorna valor.
const withOutEnd = () => {
    while (true) {
        console.log('no sé que decir');
    }
}

const failFunction = (str: string) => {
    throw new Error(str);
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'Es un string';
    } else if (typeof input === 'number') {
        return 'es numero';
    }
    return failFunction('no hay match'); 
}

console.log(example('dadadadada'));
console.log(example(23));
console.log(example([]));
console.log(example('yo no voy a salir '));