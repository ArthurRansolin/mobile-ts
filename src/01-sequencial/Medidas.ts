import promptSync from 'prompt-sync';
const prompt = promptSync();


const A = Number(prompt('Digite o valor de A: '));
const B = Number(prompt('Digite o valor de B: '));
const C = Number(prompt('Digite o valor de C: '));

const areaQuadrado = Math.pow(A, 2);
const areaTriangulo = A * B / 2;
const areaTrapezio = ((A + B) * C) / 2;

console.log(`Área do quadrado: ${areaQuadrado.toFixed(4)}`);
console.log(`Área do triângulo: ${areaTriangulo.toFixed(4)}`);
console.log(`Área do trapézio: ${areaTrapezio.toFixed(4)}`);

