#include <Arduino.h>

// sensor libs hier

// sensor pin

class Sensor{

  private:
    int sensorPin = 0;
    int value = 0;
    void sensorSetup();

  public:
    Sensor(int pin);
    void sensorCode();
    int sensorData();

};

// dtostrf(sensor.sensorData(), 6, 2, sensorValue);