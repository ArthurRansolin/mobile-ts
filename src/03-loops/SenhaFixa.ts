import promptSync from "prompt-sync";
const prompt = promptSync();

const senhaFixa = "2002";

console.log("Digite a senha");

while (true) {
    const senha = prompt("");
    if (senha === senhaFixa) {
        console.log("Acesso permitido");
        break;
    } else {
        console.log("Senha Invalida");
    }
}


