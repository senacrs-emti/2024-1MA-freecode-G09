int sensorPin = A0; // Pino do sensor de umidade
int relayPin = 7;   // Pino do relé

void setup() {
  pinMode(sensorPin, INPUT);
  pinMode(relayPin, OUTPUT);
  Serial.begin(9600); // Comunicação serial
}

void loop() {
  int umidade = analogRead(sensorPin);
  Serial.println(umidade);

  // Lógica de acionamento da bomba
  if (umidade < 500) { // Ajuste este valor com base na calibragem do sensor
    digitalWrite(relayPin, LOW); // Liga a bomba
  } else {
    digitalWrite(relayPin, HIGH); // Desliga a bomba
  }

  delay(1000); // Atualização a cada segundo
}