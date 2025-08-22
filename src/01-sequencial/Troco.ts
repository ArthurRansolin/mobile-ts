import promptSync from 'prompt-sync';
const prompt = promptSync();

const preco_produto = Number(prompt('Digite o preço do produto:'));
const quantidade = Number(prompt('Digite a quantidade comprada:'));
const valor_pago = Number(prompt('Digite o valor pago:'));

const troco = valor_pago - (preco_produto * quantidade);
console.log(`Troco: R$ ${troco.toFixed(2)}`);