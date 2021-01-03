int LedRojo = 9;
int LedAmarillo = 8;
int LedAzul = 8;

void setup() {
  Serial.begin(9600);
  pinMode(LedRojo, INPUT_PULLUP);
  pinMode(LedAmarillo, INPUT_PULLUP);
  pinMode(LedAzul, INPUT_PULLUP);
}

void loop() {

  if (Serial.available()) {
    char Letra = Serial.read();
    if (Letra == 'H') {
      digitalWrite(LedRojo, HIGH);
    }
    else if (Letra == 'L') {
      digitalWrite(LedRojo, LOW);
    }
  }
    if (Serial.available()) {
    char Letra = Serial.read();
    if (Letra == 'A') {
      digitalWrite(LedAmarillo, HIGH);
    }
    else if (Letra == 'B') {
      digitalWrite(LedAmarillo, LOW);
    }
  }
    if (Serial.available()) {
    char Letra = Serial.read();
    if (Letra == 'C') {
      digitalWrite(LedAzul, HIGH);
    }
    else if (Letra == 'D') {
      digitalWrite(LedAzul, LOW);
    }
  }
}
