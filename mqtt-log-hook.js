function createConsoleLogHook() {
  var MQTT_HOST = "test.mosquitto.org"
  var MQTT_PORT = 8081
  var MQTT_TOPIC = "bvgs"
  var MQTT_CLIENT = "Gruppe 1"

  var client = new Paho.Client(MQTT_HOST, MQTT_PORT, MQTT_CLIENT);
  var log = console.log


  console.log = function(result) {
    document.querySelector("#resultat").innerHTML = result
    log.apply(this, arguments)

    client.connect({
      useSSL: true,
      onSuccess: function() {

        log("Koblet til broker")
        const message = new Paho.Message('' + result)

        message.destinationName = MQTT_TOPIC

        client.send(message)
      }
    })
  }
}

createConsoleLogHook()
