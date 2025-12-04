
const veiculos = [
  {
    Carros: [
      { modelo: "monza", cilindrada: "2000", marca: "chevrolet", ano: "1993" },
      { modelo: "verona", cilindrada: "1800", marca: "ford", ano: "1988" },
      { modelo: "uno", cilindrada: "1000", marca: "fiat", ano: "2010" }
    ],
    Motos: [
      { modelo: "cb 500", cilindrada: "500", marca: "honda", ano: "2020" },
      { modelo: "ninja", cilindrada: "600", marca: "kawasaki", ano: "2018" },
      { modelo: "fazer", cilindrada: "250", marca: "yamaha", ano: "2019" }
    ],
    Caminhoes: [
      { modelo: "volvo fh", cilindrada: "13000", marca: "volvo", ano: "2022" },
      { modelo: "actros", cilindrada: "12000", marca: "mercedes-benz", ano: "2021" },
      { modelo: "constellation", cilindrada: "9000", marca: "vw", ano: "2020" }
    ]
  }
];


function formatarSaida(veiculo) {
    if (!veiculo) return undefined;
  
    return `modelo: ${veiculo.modelo} cilindrada: ${veiculo.cilindrada} marca: ${veiculo.marca} ano: ${veiculo.ano}`;
}

function getCarro(modelo) {
  const lista = veiculos[0]['Carros'];
  const veiculo = lista.find(v => v.modelo === modelo); 
  return formatarSaida(veiculo);
}

function getMoto(modelo) {
  const lista = veiculos[0]['Motos'];
  const veiculo = lista.find(v => v.modelo === modelo);
  return formatarSaida(veiculo);
}

function getCaminhao(modelo) {
  const lista = veiculos[0]['Caminhoes'];
  const veiculo = lista.find(v => v.modelo === modelo);
  return formatarSaida(veiculo);
}


module.exports = { getCarro, getMoto, getCaminhao };
