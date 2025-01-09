let nombres = [];
let pairCount = 0;

for (let i = 0; i < 50; i++) {
  let nombre = Math.floor(Math.random() * 100) + 1;
  nombres.push(nombre);
  if (nombre % 2 === 0) pairCount++;
}
let moyenne = nombres.reduce((a, b) => a + b) / nombres.length;



