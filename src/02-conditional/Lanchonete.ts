import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log(`Escolha o prato:
1 - Cachorro Quente - R$5.00
2 - X-Salada - R$3.50
3 - X-Bacon - R$4.80
4 - Torrada Simples - R$8.90
5 - Refrigerante - R$7.32
`);

const tipo = Number(prompt('Digite o código do prato: '));
const quantidade = Number(prompt('Digite a quantidade: '));

function menu(tipo: number, quantidade: number): number {
  switch (tipo) {
    case 1:
      return quantidade * 5.00;
    case 2:
      return quantidade * 3.50;
    case 3:
      return quantidade * 4.80;
    case 4:
      return quantidade * 8.90;
    case 5:
      return quantidade * 7.32;
    default:
      console.log('Opção inválida!');
      return 0;
  }
}

const total = menu(tipo, quantidade);
if (total > 0) {
  console.log(`Total a pagar: R$${total.toFixed(2)}`);
}
