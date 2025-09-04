import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos alunos serao digitados? "));
const nomes: string[] = [];
const notas1: number[] = [];
const notas2: number[] = [];

for (let i = 0; i < n; i++) {
  console.log(`Digite nome, primeira e segunda nota do ${i + 1}o aluno:`);
  nomes.push(prompt(""));
  notas1.push(Number(prompt("")));
  notas2.push(Number(prompt("")));
}

console.log("Alunos aprovados:")!;
for (let i = 0; i < n; i++) {
  if (notas1[i] !== undefined && notas2[i] !== undefined) {
    const media = (notas1[i]! + notas2[i]!) / 2;
    if (media >= 6.0) console.log(nomes[i]);
  }
}
