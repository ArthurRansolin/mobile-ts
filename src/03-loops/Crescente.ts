import promptSync from "prompt-sync";
const prompt = promptSync();

while (true) {
  console.log("Digite dois numeros:");
  const x = Number(prompt(""));
  const y = Number(prompt(""));

  if (x === y) {
    console.log("Valores iguais! Programa encerrado.");
    break;
  }

  if (x < y) {
    console.log("CRESCENTE!");
  } else {
    console.log("DECRESCENTE!");
  }
}
