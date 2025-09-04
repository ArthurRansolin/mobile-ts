import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantas pessoas serao digitadas? "));
const alturas: number[] = [];
const generos: string[] = [];

for (let i = 0; i < n; i++) {
  alturas.push(Number(prompt(`Altura da ${i + 1}a pessoa: `)));
  generos.push(prompt(`Genero da ${i + 1}a pessoa (M/F): `).toUpperCase());
}

const menor = Math.min(...alturas);
const maior = Math.max(...alturas);

let somaMulheres = 0;
let contMulheres = 0;
let contHomens = 0;

for (let i = 0; i < n; i++) {
  if (generos[i] === "F") {
    somaMulheres += alturas[i]!;
    contMulheres++;
  } else if (generos[i] === "M") {
    contHomens++;
  }
}

console.log(`Menor altura = ${menor.toFixed(2)}`);
console.log(`Maior altura = ${maior.toFixed(2)}`);
if (contMulheres > 0) {
  console.log(`Media das alturas das mulheres = ${(somaMulheres / contMulheres).toFixed(2)}`);
} else {
  console.log("Nao ha mulheres cadastradas.");
}
console.log(`Numero de homens = ${contHomens}`);
