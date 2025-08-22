import promptSync from 'prompt-sync';
const prompt = promptSync();

const nota1 = Number(prompt('Digite a primeira nota: '));
const nota2 = Number(prompt('Digite a segunda nota: '));

let NotaFinal = (nota1 + nota2);

console.log(`A nota final é: ${NotaFinal.toFixed(1)}`);