import promptSync from "prompt-sync";
const prompt = promptSync();

const horaInicial = parseInt(prompt("Hora inicial: "));
const horaFinal = parseInt(prompt("Hora final: "));
let duracao: number;

if (horaFinal > horaInicial) {
    duracao = horaFinal - horaInicial;
} else {
    duracao = (24 - horaInicial) + horaFinal;
}

console.log(`O jogo durou ${duracao} hora(s)`);
