#include <SoftwareSerial.h>
#include <Pitches.h>

int reset_button;
int test_button;
int motor_in1;
int motor_in2;
int buzzer;
int elect;
int i;
boolean led_show;
boolean motor_run;
boolean buzzer_run;
boolean elect_trigger;
int buzzer_tone;
long elect_duration;
long elect_start;
char receive;

SoftwareSerial BT(A5, A4); //藍芽端接收腳對應Arduino傳送腳, 藍芽端傳送腳對應Arduino接收腳

// 描述此函數...
void alert_start() {
  led_show = true;
  motor_run = true;
  buzzer_run = true;
  elect_trigger = true;
  elect_start = millis();
}

// 描述此函數...
void alert_stop() {
  led_show = false;
  motor_run = false;
  buzzer_run = false;
  elect_trigger = false;
  buzzer_tone = 0;
}

// 描述此函數...
void motor_start() {
  digitalWrite(motor_in1, HIGH);
  digitalWrite(motor_in2, LOW);
}

// 描述此函數...
void motor_stop() {
  digitalWrite(motor_in1, LOW);
  digitalWrite(motor_in2, LOW);
}

// 描述此函數...
void serial_monitor() {
  Serial.print("Test Btn:");
  Serial.print(digitalRead(test_button));
  Serial.print(", Reset Btn:");
  Serial.print(digitalRead(reset_button));
  Serial.print(", LED Show:");
  Serial.print(led_show);
  Serial.print(", Moto Run:");
  Serial.print(motor_run);
  Serial.print(", elect_trigger:");
  Serial.println(elect_trigger);
}


void setup() {
  BT.begin(115200);
  initToneMap();

  reset_button = 12;
  pinMode(reset_button, INPUT_PULLUP);
  test_button = 13;
  pinMode(test_button, INPUT_PULLUP);
  motor_in1 = A0;
  pinMode(motor_in1, OUTPUT);
  digitalWrite(motor_in1, LOW);
  motor_in2 = A1;
  pinMode(motor_in2, OUTPUT);
  analogWrite(motor_in2, 0);
  buzzer = A2;
  pinMode(buzzer, OUTPUT);
  digitalWrite(buzzer, LOW);
  elect = A3;
  pinMode(elect, OUTPUT);
  digitalWrite(elect, LOW);
  for (i = 2; i <= 10; i++) {
    pinMode(i, OUTPUT);
  }
  led_show = false;
  motor_run = false;
  buzzer_run = false;
  elect_trigger = false;
  buzzer_tone = 0;
  elect_duration = millis();
  elect_start = millis();
  receive = 'S';

}

void loop() {
  if (BT.available()) {
    receive = BT.read();
  }
  if (receive == 'C') {
    alert_start();
    receive = 'S';
  }
  if (digitalRead(test_button) == HIGH) {
    delay(20);
    while (digitalRead(test_button) == HIGH) {
    }
    alert_start();
  }
  if (digitalRead(reset_button) == LOW) {
    delay(20);
    while (digitalRead(reset_button) == LOW) {
    }
    alert_stop();
  }
  if (buzzer_run) {
    if (buzzer_tone == 0) {
      tone(buzzer, tonehashMap.valueFor("C5"), 100);
      buzzer_tone = 1;
    } else {
      tone(buzzer, tonehashMap.valueFor("C6"), 100);
      buzzer_tone = 0;
    }
  } else {
    noTone(buzzer);
  }
  if (led_show) {
    for (i = 2; i <= 10; i++) {
      digitalWrite(i, HIGH);
      delay(250);
    }
  } else {
    for (i = 2; i <= 10; i++) {
      digitalWrite(i, LOW);
    }
  }
  if (motor_run) {
    motor_start();
  } else {
    motor_stop();
  }
  if (elect_trigger) {
    if (millis() - elect_start >= 5000) {
      digitalWrite(elect, HIGH);
      elect_duration = millis();
    }
    if (millis() - elect_duration >= 100) {
      digitalWrite(elect, LOW);
      elect_start = millis();
    }
  }

}