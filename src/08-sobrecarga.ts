// Emilio => ['E', 'm', 'i', 'l', 'i', 'o']
// ['E', 'm', 'i', 'l', 'i', 'o'] => Emilio

function parseStr(input: string | string[]): string | string[] {
    if (typeof input === 'string') {
        return input.split('');
    } else {
        return input.join('');
    }
}

const rtaArray = parseStr(['E', 'm', 'i', 'l', 'i', 'o']);
console.log(`['E', 'm', 'i', 'l', 'i', 'o'] => `, rtaArray);

const rtaString = parseStr('Emilio');
console.log('Emilio => ', rtaString);

/*¿a que se refiere a sobre carga de funciones?
en este caso tenemos una función que puede retornar dos valores de diferente tipo
debido a esto no se podrá realizar funciones tipo string o array al menos que sea definido
a eso se refiere con sobre carga, no saber dar respuesta al menos que sea definida
*/

if (Array.isArray(rtaString)) {
    console.log(rtaString.reverse());
}

if (typeof rtaArray === 'string') {
    console.log(rtaArray.toLowerCase());
}