#include "Display.h"

const int LED1 = 4;
const int LED2 = 5;
const int LED3 = 6;
const int LED4 = 7;
const int buttonPin1 = 8;
const int buttonPin2 = 9;
const int KEY1 = 100;
const int KEY2 = -100;
int delayTime = 500;

int buttonState1 = 0;
int lastButtonState1 = 0;

int buttonState2 = 0;
int lastButtonState2 = 0;


int current  = LED1;




void setup() {
  // put your setup code here, to run once:
    pinMode(LED1, OUTPUT);
    pinMode(LED2, OUTPUT);
    pinMode(LED3, OUTPUT);
    pinMode(LED4, OUTPUT);
    pinMode(buttonPin1, INPUT_PULLUP);
    pinMode(buttonPin2, INPUT_PULLUP);
}

void loop() {
  // put your main code here, to run repeatedly:
    buttonState1 = digitalRead(buttonPin1);
    buttonState2 = digitalRead(buttonPin2);




  digitalWrite(current, HIGH); //turn on LED i
  delay(delayTime);
  digitalWrite(current, LOW); //turn it off.

current = current + 1;
    if (current > LED4)
        current = LED1;


  Display.show("sped:");
  delay(500);
  Display.show(delayTime);

      if (buttonState1 != lastButtonState1) {
      if (buttonState1 == LOW) {
        delayTime += KEY1;
      }
      lastButtonState1 = buttonState1;
    }

  if (buttonState2 != lastButtonState2) {
      if (buttonState2 == LOW) {
        delayTime += KEY2;
      }
      lastButtonState2 = buttonState2;
    }
  
}