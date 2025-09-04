import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos valores vai ter cada vetor? "));
const A: number[] = [];
const B: number[] = [];
const C: number[] = [];

console.log("Digite os valores do vetor A:");
for (let i = 0; i < n; i++) A.push(Number(prompt("")));

console.log("Digite os valores do vetor B:");
for (let i = 0; i < n; i++) B.push(Number(prompt("")));

for (let i = 0; i < n; i++) C.push(A[i]! + B[i]!);

console.log("VETOR RESULTANTE:");
console.log(C.join("\n"));
