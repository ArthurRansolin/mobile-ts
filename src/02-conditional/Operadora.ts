import promptSync from 'prompt-sync';
const prompt = promptSync();

const mins = Number(prompt('Digite a quantidade de minutos: '));
const valor = 50;

let total = 0;

if (mins > 100) {
  const extra = mins - 100;
  const total = (extra * 2) + valor;
  console.log(`O valor total da sua conta é: R$ ${total.toFixed(2)}`);
}
else {
  console.log(`O valor total da sua conta é: R$ ${valor.toFixed(2)}`);
}