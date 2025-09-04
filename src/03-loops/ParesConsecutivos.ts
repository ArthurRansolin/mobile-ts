import promptSync from "prompt-sync";
const prompt = promptSync();

while (true) {
  const x = Number(prompt("Digite um numero inteiro: "));
  if (x === 0) break;

  let soma = 0;
  let num = x;
  for (let i = 0; i < 5; i++) {
    if (num % 2 !== 0) num++;
    soma += num;
    num += 2;
  }
  console.log(`SOMA = ${soma}`);
}
