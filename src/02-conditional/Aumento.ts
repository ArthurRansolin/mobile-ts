import promptSync from 'prompt-sync';
const prompt = promptSync();

let salario = Number(prompt('Digite o salario do funcionario: '));
let aumento;
let porcentagem;

if (salario <= 1000) {
    aumento = salario * 0.20;
    porcentagem = 20;
} else if (salario <= 3000 ) {
    aumento = salario * 0.15;
    porcentagem = 15;
} else if (salario <= 8000) {
    aumento = salario * 0.10;
    porcentagem = 10;
} else {
    aumento = salario * 0.05;
    porcentagem = 5;
}

salario += aumento;

console.log(`O novo salario sera de R$ ${salario.toFixed(2)}`);
console.log(`O aumento sera de R$ ${aumento.toFixed(2)}`);
console.log(`A porcentagem de aumento foi de ${porcentagem}%`);