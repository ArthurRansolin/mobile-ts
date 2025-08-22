import promptSync from 'prompt-sync';
const prompt = promptSync();

const base = Number(prompt('Digite a base do retangulo:'));
const altura = Number(prompt('Digite a altura do retangulo:'));

const area = base * altura;
const perimetro = 2 * (base + altura);
const diagonal = Math.sqrt(base ** 2 + altura ** 2);

console.log(`Area do retangulo: ${area.toFixed(4)}`);
console.log(`Perimetro do retangulo: ${perimetro.toFixed(4)}`);
console.log(`Diagonal do retangulo: ${diagonal.toFixed(4)}`);
