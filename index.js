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