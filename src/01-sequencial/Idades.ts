import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome_1 = prompt('Digite o nome da primeira pessoa:');
const idade_1 = Number(prompt('Digite a idade da primeira pessoa:'));

const nome_2 = prompt('Digite o nome da segunda pessoa:');
const idade_2 = Number(prompt('Digite a idade da segunda pessoa:'));

const media = (idade_1 + idade_2) / 2;

console.log(`A idade media entre ${nome_1} e ${nome_2} é de ${media.toFixed(1)} anos.`);
