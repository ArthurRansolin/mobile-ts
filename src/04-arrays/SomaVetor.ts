import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));
const vetor: number[] = [];

for (let i = 0; i < n; i++) {
  vetor.push(Number(prompt("Digite um numero: ")));
}

const soma = vetor.reduce((a, b) => a + b, 0);
const media = soma / vetor.length;

console.log("VALORES =", vetor.join(" "));
console.log(`SOMA = ${soma.toFixed(2)}`);
console.log(`MEDIA = ${media.toFixed(2)}`);
