#include "sensor.h"

Sensor::Sensor(int pin){
  sensorPin = pin;
  // sensorSetup();
}

void Sensor::sensorSetup() {
  //write setup code here
}

void Sensor::sensorCode() {

}

int Sensor::sensorData(){
  int value = analogRead(sensorPin);
  return value;
}