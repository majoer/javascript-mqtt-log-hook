# Javascript MQTT console-log hook

Deklarerer en funksjon `sendInnSvaret(svar, gruppe)`

- `svar` skrives til et HTML element med `id="resultat"`
- `svar` sendes til MQTT server med `gruppe` som klient-id og "bvgs" som topic

Legg til URL i e.g. jsfiddle: https://cdn.jsdelivr.net/gh/majoer/javascript-mqtt-task-reporter-bvgs@master/mqtt-task-reporter-bvgs.js

Eksempel: https://jsfiddle.net/matsjoer/mcs8xw0d

Meldinger skrives til broker. Kan leses her: http://www.hivemq.com/demos/websocket-client/

1. sett host: test.mosquitto.org
2. sett port: 8081
3. subscribe til topic: bvgs


Merk:
jsdelivr.net cacher js fila. 
Slett cachen her: https://purge.jsdelivr.net/gh/majoer/javascript-mqtt-task-reporter-bvgs@master/mqtt-task-reporter-bvgs.js
