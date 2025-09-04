import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));
const vetor: number[] = [];

for (let i = 0; i < n; i++) {
  vetor.push(Number(prompt("Digite um numero: ")));
}

const maior = Math.max(...vetor);
const pos = vetor.indexOf(maior);

console.log(`MAIOR VALOR = ${maior}`);
console.log(`POSICAO DO MAIOR VALOR = ${pos}`);
