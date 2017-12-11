var botsetup = require("../botSetup");
var Alexa = botsetup.alexa;

Alexa.intent("Greeting", {
    "slots": {},
    "utterances": []
  }, function(request, response) {
    var stopOutput = "You said hi";
    response.say(stopOutput);
  }
 );