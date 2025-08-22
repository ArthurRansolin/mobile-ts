import promptSync from 'prompt-sync';
const prompt = promptSync();

const segundos = Number(prompt('Digite o tempo em segundos: '));
const horas = Math.floor(segundos / 3600);
const minutos = Math.floor((segundos % 3600) / 60);

console.log(`O tempo equivalente é: ${horas} horas, ${minutos} minutos e ${segundos % 60} segundos.`);