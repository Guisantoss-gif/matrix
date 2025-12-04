
const assert = require('assert');

const { getCarro, getMoto, getCaminhao } = require('./matriz.js'); 

assert.strictEqual(
  getCarro("monza"),
  "modelo: monza cilindrada: 2000 marca: chevrolet ano: 1993", 
  "getCarro('monza') falhou"
);

assert.strictEqual(
  getCarro("uno"),
  "modelo: uno cilindrada: 1000 marca: fiat ano: 2010",
  "getCarro('uno') falhou"
);

assert.strictEqual(
  getMoto("ninja"),
  "modelo: ninja cilindrada: 600 marca: kawasaki ano: 2018",
  "getMoto('ninja') falhou"
);

assert.strictEqual(
  getCaminhao("volvo fh"),
  "modelo: volvo fh cilindrada: 13000 marca: volvo ano: 2022",
  "getCaminhao('volvo fh') falhou"
);

console.log("Todos os testes passaram!");
