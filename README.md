# Javascript MQTT Task Reporter 
Deklarerer en funksjon `sendInnSvar(svar, gruppe)`

- `svar` skrives til et HTML element med `id="resultat"`
- `svar` sendes til MQTT server med `gruppe` som klient-id og "bvgs" som topic

Legg til ekstern javascript i jsfiddle:
- https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.1.0/paho-mqtt.min.js
- https://cdn.jsdelivr.net/gh/majoer/javascript-mqtt-task-reporter-bvgs@master/mqtt-task-reporter-bvgs.js

Eksempler:
- https://jsfiddle.net/matsjoer/mcs8xw0d

Dokumentasjon, paho mqtt: http://www.eclipse.org/paho/files/jsdoc/index.html

Meldinger skrives til broker. Kan leses her: http://www.hivemq.com/demos/websocket-client/

1. sett host: test.mosquitto.org
2. sett port: 8080 (websocket http)
3. subscribe til topic: bvgs


Merk:
jsdelivr.net cacher mqtt-task-reporter-bvgs.js. Hvis man gjør endringer på den, så må man slette cachen ved å gå hit:

https://purge.jsdelivr.net/gh/majoer/javascript-mqtt-task-reporter-bvgs@master/mqtt-task-reporter-bvgs.js
