// instalar biblioteca firmata
#include <Firmata.h>

// Define o pino onde o sensor de umidade está conectado
const int pinoSensorUmidade = A0;
const int ledVermelho = 13;
const int ledVerde = 12;

 
void setup() {
  // Inicia a comunicação serial
  Serial.begin(9600);
  pinMode(ledVermelho, OUTPUT);
  pinMode(ledVerde, OUTPUT);
  pinMode(pinoSensorUmidade, INPUT);
  Firmata.begin(57600);
}
 
void loop() {
  // Lê o valor analógico do sensor de umidade
  int valorUmidade = analogRead(pinoSensorUmidade);
 
  // Exibe o valor lido no monitor serial
  Serial.print("Nível de umidade do solo: ");
  Serial.println(valorUmidade);
 
  // Controla o LED com base no valor de umidade
  if (valorUmidade <= 500) {
      // Acende o LED vermelho quando a umidade está baixa e apaga o verde
    digitalWrite( ledVermelho, HIGH);
    digitalWrite( ledVerde, LOW);  
    
  }  else {
      // Acende o LED verde quando a umidade está alta e apaga o vermelho
    digitalWrite( ledVerde, HIGH);
    digitalWrite( ledVermelho, LOW);   
  }
 
  // envia as informacoes  
  Firmata.sendAnalog(pinoSensorUmidade, valorUmidade);
  delay(100);

  // Espera 1 segundo antes de ler novamente
  delay(1000);
}