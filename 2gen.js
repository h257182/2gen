let mensageirosAzul = 10;
let mensageirosVermelho = 5;
const timestampInicial = new Date();
let timestampFinal;

const numeroRandom = Math.floor(Math.random() * (70 - 60 + 1)) + 60; // Min 60 min Max 70 min

const calcTravessia = () => {
  const timeTravessia = numeroRandom * 1000 * 60;
  console.log(timeTravessia); // em milisegundos
  // return timeTravessia
};

const probabilidadeCastelo = () => {
  // 45% de chance de o mensageiro ser capturado pelo Castelo
  const n = 0.45;
  return !!n && Math.random() <= n;
};

const probabilidadeAzul = () => {
  // 1% de chance de de o exército AZUL falhar
  const n = 0.01;
  return !!n && Math.random() <= n;
};

const displayDerrota = () => {
  console.log(
    `Exército perdeu, Castelo ganhou! => mensageirosAzul ${mensageirosAzul} mensageirosVermelho ${mensageirosVermelho}`
  );
};

const displayVitoria = () => {
  console.log(
    `Exército ganhou, Castelo perdeu! => mensageirosAzul ${mensageirosAzul} mensageirosVermelho ${mensageirosVermelho}`
  );
};

const enviarMsgAzul = () => {
  // Testa a possibilidade do exército AZUL falhar
  if (probabilidadeAzul()) {
    mensageirosAzul -= 1;
    console.log('exército AZUL falhou');
    if (mensageirosAzul >= 1) {
      console.log(`enviando NOVO mensageiro AZUL ao VERMELHO`);
      enviarMsgAzul();
    } else {
      console('exército AZUL sem mensageiros!');
      displayDerrota();
    }
  } else {
    mensageirosAzul -= 1;
    console.log(`enviando mensageiro AZUL ao VERMELHO`);
    if (probabilidadeCastelo()) {
      console.log('mensageiro AZUL capturado');
      console.log(`enviando NOVO mensageiro AZUL ao VERMELHO`);
      enviarMsgAzul();
    } else {
      console.log('mensageiro AZUL passou!');
      console.log('sinalizador DISPARADO!');
      displayVitoria();
    }
  }
};

const enviarMsgVermelho = () => {
  console.log(`enviando mensageiro VERMELHO ao AZUL`);
  if (probabilidadeCastelo()) {
    mensageirosVermelho -= 1;
    console.log('mensageiro VERMELHO capturado');
    if (mensageirosVermelho >= 1) {
      console.log('enviando NOVO mensageiro VERMELHO ao AZUL');
      enviarMsgVermelho();
    } else {
      console.log('exército VERMELHO sem mensageiros!');
      displayDerrota();
    }
  } else {
    mensageirosVermelho -= 1;
    console.log('mensageiro VERMELHO passou!');
    enviarMsgAzul();
  }
};

enviarMsgVermelho();
