import promptSync from 'prompt-sync';
const prompt = promptSync();

const distanciaKm = Number(prompt('Digite a distância em km: '));
const combustivel = Number(prompt('Digite o Combustivel gasto: '));

const consumo = distanciaKm / combustivel;

console.log(`O consumo do veículo é: ${consumo.toFixed(3)} km/l`);