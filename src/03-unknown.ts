let anyVar: any;
anyVar = 30;
anyVar = [];

//este error es grabe porque el any permite declararse como respuesta a variables que se le
//definio su tipo
let booleanVar: boolean = anyVar;

anyVar.doSomething();

let anyUnknown: unknown;
anyUnknown = 30;
anyUnknown = {nombre: 'dadada'};
anyUnknown = 'string';

//pese que el unknown es similar al any, al momento de declarar como respuesta a variable te va
//pedir que verifiques el tipo mediante una condicional
//let booleanVar2: boolean = anyUnknown;
let booleanVar2: boolean;

if (typeof anyUnknown === 'boolean') {
    booleanVar2 = anyUnknown;
}

//tambien no te deja ejecutar una funcion x, primero porque no esta definido dentro de la variable
//segundo porque no es de su tipo
//anyUnknown.doSomething();

//ejemplo practico del unknown
const parse = (str: string): unknown => {
    return JSON.parse(str);
}

//unkown viene a remplazar el any