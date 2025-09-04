import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos elementos vai ter o vetor? "));
const vetor: number[] = [];

for (let i = 0; i < n; i++) vetor.push(Number(prompt("Digite um numero: ")));

const pares = vetor.filter(v => v % 2 === 0);

if (pares.length === 0) {
  console.log("NENHUM NUMERO PAR");
} else {
  const media = pares.reduce((a, b) => a + b, 0) / pares.length;
  console.log(`MEDIA DOS PARES = ${media.toFixed(1)}`);
}
