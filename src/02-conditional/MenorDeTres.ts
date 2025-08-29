import promptSync from 'prompt-sync';
const prompt = promptSync();

const a = Number(prompt('Digite o valor de a: '));
const b = Number(prompt('Digite o valor de b: '));
const c = Number(prompt('Digite o valor de c: '));

let menor = a;

if (b < menor) {
  menor = b;
}

if (c < menor) {
  menor = c;
}

console.log(`O menor valor é: ${menor}`);