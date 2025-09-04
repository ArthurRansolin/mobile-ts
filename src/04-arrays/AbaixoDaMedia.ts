import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos elementos vai ter o vetor? "));
const vetor: number[] = [];

for (let i = 0; i < n; i++) vetor.push(Number(prompt("Digite um numero: ")));

const media = vetor.reduce((a, b) => a + b, 0) / n;
console.log(`MEDIA DO VETOR = ${media.toFixed(3)}`);

console.log("ELEMENTOS ABAIXO DA MEDIA:");
for (const v of vetor) if (v < media) console.log(v.toFixed(1));
