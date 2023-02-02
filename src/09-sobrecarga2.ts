export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
    if (typeof input === 'string') {
        return input.split('');
    } else if (Array.isArray(input)) {
        return input.join('');
    } else if (typeof input === 'number') {
        return true;
    }
}

const rtaArray = parseStr(['E', 'm', 'i', 'l', 'i', 'o']);
console.log(`['E', 'm', 'i', 'l', 'i', 'o'] => `, rtaArray);

const rtaString = parseStr('Emilio');
console.log('Emilio => ', rtaString);

/*en este caso se puede declarar opciones en vez utilizar condicionales
permitiendonos agregar más tipos de variable y reducir el código
ejemplos:
*/

console.log(rtaString.reverse());
console.log(rtaArray.toLowerCase());