//Node Imports
let express = require('express');
let app = express();
//to load .env file
require("dotenv").load();

//Express Server
var port = process.env.port || process.env.PORT || 8080;
app.listen(port, function() {
  console.log("%s listening to %s", "Express" , port);
});
//#######################################################//
//Bot Framework Setup
//#######################################################//
let builder = require("botbuilder");
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID, //Currently using my credentials @BhomitB
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
app.post("/api/messages", connector.listen());

//Bot connector initiation
var bot = new builder.UniversalBot(connector);
bot.set("persistConversationData", true);

//#######################################################//
//Alexa Skill kit Setup using Alexa-App
//#######################################################//
let alexa = require("alexa-app");
let Alexapp = new alexa.app("alexa");
Alexapp.express({ expressApp : app });

//Connecting API.ai Model
// var luisRecognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL);
// bot.recognizer(luisRecognizer);

var intents = new builder.IntentDialog({
//   recognizers: [
//     regeX.clearDataRegex
//   ],
//   recognizeOrder: "series"
});

module.exports = {
  bot: bot,
  intents: intents,
  connector: connector,
  alexa: Alexapp
};