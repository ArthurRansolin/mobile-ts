import promptSync from 'prompt-sync';
const prompt = promptSync();

const a = Number(prompt('Digite o valor de a: '));
const b = Number(prompt('Digite o valor de b: '));
const c = Number(prompt('Digite o valor de c: '));

const delta = (b ** 2) - 4 * a * c;
const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

if (delta < 0 || a === 0) {
  console.log('Esta equacao nao possui raizes reais');
}
else {
  console.log(`As raízes da equação são: ${raiz1.toFixed(4)} e ${raiz2.toFixed(4)}`);
}