//=================================================
//Main app all components are integrated here
//~@BhomitB
//==================================================

//==================================================
//Importing Modules
//==================================================

//Initiate Bot
var builder = require("botbuilder");
var botsetup = require("./src/botSetup");
var bot = botsetup.bot;
var Alexa = botsetup.alexa;
var intents = botsetup.intents; //Define intents from luis model

//Import Dialogs
// var Greeting = require("./resources/Dialogs/Greetings");
var Help = require("./resources/dialogs/help");

//==================================================
//Initiates dialog by matching recognized intent
//==================================================

//Clear User Data
//intents.matches("Greeting", Greeting.dialogs);
intents.onDefault(Help.dialogs);

Alexa.intent("Greeting", {
    "slots": {},
    "utterances": []
  }, function(request, response) {
    var stopOutput = "You said hi";
    response.say(stopOutput);
  }
 );
//Routes bot dialogs to specific intent dialogs
bot.dialog("/", intents);