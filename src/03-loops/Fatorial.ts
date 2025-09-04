import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Digite o valor de N: "));

let fat = 1;
for (let i = 1; i <= n; i++) {
  fat *= i;
}
console.log(`FATORIAL = ${fat}`);
