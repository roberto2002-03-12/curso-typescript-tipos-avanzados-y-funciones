const prices: (number | string)[] = [12, 31, 14, 17, 'precio x'];
prices.push(1);
prices.push('dada');

let user: [string, number, boolean];

user = ['emilio.contreras@tecsup.edu.pe', 21, true];

//destructurar una tupla
const [email, age] = user;
console.log('el email es: ', email, ' su edad es: ', age);

//donde se utiliza la tupla
//se utiliza en usaState en el caso de react