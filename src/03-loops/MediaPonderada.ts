import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos casos voce vai digitar? "));

for (let i = 0; i < n; i++) {
  console.log("Digite tres numeros:");
  const a = Number(prompt(""));
  const b = Number(prompt(""));
  const c = Number(prompt(""));

  const media = (a * 2 + b * 3 + c * 5) / 10;
  console.log(`MEDIA = ${media.toFixed(1)}`);
}
