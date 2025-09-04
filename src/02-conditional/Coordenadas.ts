import promptSync from "prompt-sync";
const prompt = promptSync();

// Entrada
const x = parseFloat(prompt("Digite o valor de X: "));
const y = parseFloat(prompt("Digite o valor de Y: "));

let resultado: string;

// Verificação de posição
if (x === 0 && y === 0) {
    resultado = "Origem";
} else if (x === 0) {
    resultado = "Eixo Y";
} else if (y === 0) {
    resultado = "Eixo X";
} else if (x > 0 && y > 0) {
    resultado = "Q1";
} else if (x < 0 && y > 0) {
    resultado = "Q2";
} else if (x < 0 && y < 0) {
    resultado = "Q3";
} else {
    resultado = "Q4";
}

// Saída
console.log(resultado);
