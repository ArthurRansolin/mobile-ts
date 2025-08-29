import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log('Digite dois numeros inteiros:');
const valor1 = Number(prompt('Primeiro: '));
const valor2 = Number(prompt('Segundo: '));

if (valor1 % valor2 === 0 || valor2 % valor1 === 0) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
}