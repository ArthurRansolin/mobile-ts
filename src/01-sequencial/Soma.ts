import promptSync from 'prompt-sync';
const prompt = promptSync();

const X = Number(prompt('Digite o valor de X:'));
const Y = Number(prompt('Digite o valor de Y:'));

let Soma = X + Y;
console.log(`Soma = ${Soma}`);

