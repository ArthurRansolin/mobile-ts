import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantas pessoas serao digitadas? "));
const nomes: string[] = [];
const idades: number[] = [];
const alturas: number[] = [];

for (let i = 0; i < n; i++) {
  console.log(`Dados da ${i + 1}a pessoa:`);
  nomes.push(prompt("Nome: "));
  idades.push(Number(prompt("Idade: ")));
  alturas.push(Number(prompt("Altura: ")));
}

const mediaAltura = alturas.reduce((a, b) => a + b, 0) / n;
const jovens: string[] = nomes.filter((_, i) => idades[i] !== undefined && idades[i] < 16);
const percJovens = (jovens.length / n) * 100;

console.log(`Altura média: ${mediaAltura.toFixed(2)}`);
console.log(`Pessoas com menos de 16 anos: ${percJovens.toFixed(1)}%`);
for (const nome of jovens) console.log(nome);
