import promptSync from 'prompt-sync';
const prompt = promptSync();

const preco = Number(prompt('Preço do produto: R$ '));
const qtd = Number(prompt('Quantidade comprada: '));
const dinheiro = Number(prompt('Dinheiro recebido: R$ '));

const total = preco * qtd;
const troco = dinheiro - total;
if (troco < 0) {
  console.log(`DINHEIRO INSUFICIENTE. FALTAM R$${-troco.toFixed(2)} `);
} else {
  console.log(`O troco é R$${troco.toFixed(2)}.`);
}