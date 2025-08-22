import promptSync from 'prompt-sync';
const prompt = promptSync();

const Nome_Func = prompt('Digite o nome do funcionário: ');
const Valor_Hora = Number(prompt('Digite o valor da hora: '));
const Horas_Trab = Number(prompt('Digite a quantidade de horas trabalhadas: '));

const Salario = Valor_Hora * Horas_Trab;

console.log(`O salário do funcionário ${Nome_Func} é: R$ ${Salario.toFixed(2)}`);
