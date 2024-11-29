void Setup() {
  Serial.begin(9600); // Inicia a comunicação serial na velocidade de 9600 bps
}

void loop() {
    if (Serial.available()) { // Verifica se há dados recebidos
        String comando = Serial.readString(); // Lê os dados recebidos
        Serial.println("Recebido: " + comando); // Envia uma resposta
 }
 delay(100); // Pequena pausa
}
