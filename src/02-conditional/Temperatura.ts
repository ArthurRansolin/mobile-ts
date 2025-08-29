import promptSync from 'prompt-sync';
const prompt = promptSync();

const tipo = prompt('Voce vai digitar a temperatura em qual escala (C/F)? ');

if (tipo.toUpperCase() === 'C') {
  const celsius = Number(prompt('Digite a temperatura em Celsius: '));
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`Temperatura equivalente em Fahrenheit: ${fahrenheit.toFixed(2)}`);
}
else if (tipo.toUpperCase() === 'F') {
  const fahrenheit = Number(prompt('Digite a temperatura em Fahrenheit: '));
  const celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`Temperatura equivalente em Celsius: ${celsius.toFixed(2)}`);
} else {
  console.log('Tipo de escala invalido.');
}

