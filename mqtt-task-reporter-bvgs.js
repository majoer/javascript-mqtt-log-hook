function sendInnSvaret(svar, gruppe) {
  var MQTT_HOST = "test.mosquitto.org"
  var MQTT_PORT = 8081
  var MQTT_TOPIC = "bvgs"

  var resultatEl = document.querySelector("#resultat")
  var oppgaveEl = document.querySelector("h1")
  var gruppenavn = gruppe ? ('' + gruppe).trim() : 'Ukjent Gruppe'
  var oppgavenavn = oppgaveEl ? oppgaveEl.innerHTML.trim() : 'Ukjent Oppgave'
  
  var client = new Paho.Client(MQTT_HOST, MQTT_PORT, gruppenavn);

  if (resultatEl) {
    resultatEl.innerHTML = svar
  } else {
    console.error("Kunne ikke finne element med id='resultat'")
  }

  console.log(svar, gruppe)

  client.connect({
    useSSL: true,
    onSuccess: function() {

      console.log("Koblet til broker")
      
      var message = new Paho.Message(gruppenavn + ":" oppgavenavn + ":" + svar)

      message.destinationName = MQTT_TOPIC

      client.send(message)
    }
  })
}


