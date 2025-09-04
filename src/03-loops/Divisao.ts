import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos casos voce vai digitar? "));

for (let i = 0; i < n; i++) {
  const numerador = Number(prompt("Entre com o numerador: "));
  const denominador = Number(prompt("Entre com o denominador: "));

  if (denominador === 0) {
    console.log("DIVISAO IMPOSSIVEL");
  } else {
    console.log(`DIVISAO = ${(numerador / denominador).toFixed(2)}`);
  }
}
