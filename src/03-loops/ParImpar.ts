import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));

for (let i = 0; i < n; i++) {
  const num = Number(prompt("Digite um numero: "));
  if (num === 0) {
    console.log("NULO");
  } else if (num % 2 === 0 && num > 0) {
    console.log("PAR POSITIVO");
  } else if (num % 2 === 0 && num < 0) {
    console.log("PAR NEGATIVO");
  } else if (num % 2 !== 0 && num > 0) {
    console.log("IMPAR POSITIVO");
  } else {
    console.log("IMPAR NEGATIVO");
  }
}
