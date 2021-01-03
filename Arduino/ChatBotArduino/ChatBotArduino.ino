int RED = 9;
int YELLOW = 8;
int BLUE = 7;

void setup() {
  Serial.begin(9600);
  pinMode(RED, INPUT_PULLUP);
  pinMode(YELLOW, INPUT_PULLUP);
  pinMode(BLUE, INPUT_PULLUP);
}

void loop() {

  
  if (Serial.available()) {
    char Letra = Serial.read();
    if (Letra == 'A') {
      digitalWrite(RED, HIGH);
    }
    else if (Letra == 'B') {
      digitalWrite(RED, LOW);
    }
    else if (Letra == 'C'){
      digitalWrite (YELLOW, HIGH);
    }
        else if (Letra == 'D'){
      digitalWrite (YELLOW, LOW);
    }
            else if (Letra == 'E'){
      digitalWrite (BLUE, HIGH);
    }
            else if (Letra == 'F'){
      digitalWrite (BLUE, LOW);
    }
  }

}
