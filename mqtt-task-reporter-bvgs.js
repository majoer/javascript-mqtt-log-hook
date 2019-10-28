function sendInnSvaret(svar, gruppe) {
  var MQTT_HOST = "test.mosquitto.org"
  var MQTT_PORT = 8081
  var MQTT_TOPIC = "bvgs"

  var client = new Paho.Client(MQTT_HOST, MQTT_PORT, gruppe);

  document.querySelector("#resultat").innerHTML = result
  console.log(result)

  client.connect({
    useSSL: true,
    onSuccess: function() {

      console.log("Koblet til broker")
      const message = new Paho.Message('' + svar)

      message.destinationName = MQTT_TOPIC

      client.send(message)
    }
  })
}


