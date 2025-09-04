import promptSync from "prompt-sync";
const prompt = promptSync();

let alcool = 0, gasolina = 0, diesel = 0;

while (true) {
  const cod = Number(prompt("Informe um codigo (1, 2, 3) ou 4 para parar: "));
  if (cod === 4) break;

  if (cod === 1) alcool++;
  else if (cod === 2) gasolina++;
  else if (cod === 3) diesel++;
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
