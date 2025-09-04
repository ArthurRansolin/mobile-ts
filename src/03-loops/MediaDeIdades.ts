import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("Digite as idades");

let soma = 0;
let contador = 0;

while (true) {
    const idade = Number(prompt(""));
 
    if (idade < 0) {
            break;
    }

    soma += idade;
    contador++;

}

const media = soma / contador;

if (contador === 0) {
    console.log("Impossivel calcular");
} else {
    console.log(`Media das idades: ${media.toFixed(2)}`);
}