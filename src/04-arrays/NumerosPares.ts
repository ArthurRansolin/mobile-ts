import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));
const vetor: number[] = [];

for (let i = 0; i < n; i++) {
  vetor.push(Number(prompt("Digite um numero: ")));
}

const pares = vetor.filter(v => v % 2 === 0);
console.log("NUMEROS PARES:");
console.log(pares.join(" "));
console.log(`QUANTIDADE DE PARES = ${pares.length}`);
