import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log('Digite as tres distancias:');

const a = Number(prompt(''));
const b = Number(prompt(''));
const c = Number(prompt(''));

let maior = a;

if (b > maior) {
  maior = b;
}
if (c > maior) {
  maior = c;
}

console.log(`MAIOR DISTANCIA = ${maior}`);