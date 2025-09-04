import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantas pessoas voce vai digitar? "));
const nomes: string[] = [];
const idades: number[] = [];

for (let i = 0; i < n; i++) {
  console.log(`Dados da ${i + 1}a pessoa:`);
  nomes.push(prompt("Nome: "));
  idades.push(Number(prompt("Idade: ")));
}

let maisVelho = 0;
for (let i = 1; i < n; i++) {
  if (idades[i] !== undefined && idades[maisVelho] !== undefined && idades[i]! > idades[maisVelho]!) {
    maisVelho = i;
  }
}

console.log(`PESSOA MAIS VELHA: ${nomes[maisVelho]}`);
