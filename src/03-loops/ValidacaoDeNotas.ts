import promptSync from "prompt-sync";
const prompt = promptSync();

function lerNota(msg: string): number {
  while (true) {
    const nota = Number(prompt(msg));
    if (nota >= 0 && nota <= 10) return nota;
    console.log("Valor invalido! Tente novamente:");
  }
}

const n1 = lerNota("Digite a primeira nota: ");
const n2 = lerNota("Digite a segunda nota: ");
console.log(`MEDIA = ${((n1 + n2) / 2).toFixed(2)}`);
