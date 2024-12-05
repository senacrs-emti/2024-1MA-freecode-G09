const { USBPort } = require('USBport');
 
// Defina a porta do Arduino (substitua por exemplo: 'COM3' no Windows ou '/dev/ttyUSB0' no Linux/Mac)
const portaArduino = 'COM3'; // Altere para a porta correta
const velocidade = 9600;
 
const port = new USBPort({ path: portaArduino, baudRate: velocidade });
 
// Abrindo a conexão com a porta USB
port.on('open', () => {
  console.log('Conexão com Arduino estabelecida!');
  
  // Enviar um comando para o Arduino
  port.write('Oi Arduino!\n');
});

// Ler dados recebidos do Arduino
port.on('data', (data) => {
  console.log('Recebido do Arduino:', data.toString());
});
 
// Lidar com erros
port.on('error', (err) => {
  console.error('Erro na comunicação:', err.message);
});


const { Board, Sensor, Relay } = require("johnny-five");

// Inicializa a placa
const board = new Board();

board.on("ready", () => {
  console.log("Placa conectada!");

  // Configura o sensor de umidade do solo no pino A0
  const soilSensor = new Sensor({
    pin: "A0",
    freq: 1000, // Lê os dados a cada 1 segundo
  });

  // Configura o relé no pino 8
  const pumpRelay = new Relay(8);

  // Definir limite de umidade mínima (ajuste conforme necessário)
  const MOISTURE_THRESHOLD = 200; // Valor típico para sensores analógicos (0-1023)

  // Monitora a umidade do solo
  soilSensor.on("data", () => {
    const moistureLevel = soilSensor.value;
    console.log(`Nível de umidade: ${moistureLevel}`);

    if (moistureLevel < MOISTURE_THRESHOLD) {
      console.log("Solo seco. Ligando a bomba...");
      pumpRelay.on();
    } else {
      console.log("Solo úmido. Desligando a bomba...");
      pumpRelay.off();
    }
  });

  // Desliga a bomba ao encerrar o programa
  board.on("exit", () => {
    pumpRelay.off();
    console.log("Sistema encerrado.");
  });
});



