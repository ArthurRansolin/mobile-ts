import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos casos de teste serao digitados? "));

let total = 0, coelhos = 0, ratos = 0, sapos = 0;

for (let i = 0; i < n; i++) {
  const qtd = Number(prompt("Quantidade de cobaias: "));
  const tipo = prompt("Tipo de cobaia (C, R, S): ").toUpperCase();

  total += qtd;
  if (tipo === "C") coelhos += qtd;
  else if (tipo === "R") ratos += qtd;
  else if (tipo === "S") sapos += qtd;
}

console.log("RELATORIO FINAL:");
console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${(coelhos / total * 100).toFixed(2)}`);
console.log(`Percentual de ratos: ${(ratos / total * 100).toFixed(2)}`);
console.log(`Percentual de sapos: ${(sapos / total * 100).toFixed(2)}`);
