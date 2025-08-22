import promptSync from 'prompt-sync';
const prompt = promptSync();

const raio = Number(prompt('Digite o raio do círculo:'));
const pi = Math.PI;

const area = pi * Math.pow(raio, 2);

console.log(`Área: ${area.toFixed(3)}`);