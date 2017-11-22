//Node Imports
var restify = require("restify");
var builder = require("botbuilder");

//to load .env file
require("dotenv").load();

//Importing Regex Intents
// var regeX = require("./regexIntents");

// Setup Restify Server
var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function() {
  console.log("%s listening to %s", server.name, server.url);
});


// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
  appId: "", //process.env.MICROSOFT_APP_ID, //Currently using my credentials @BhomitB
  appPassword: ""//process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
server.post("/api/messages", connector.listen());

//Bot connector initiation
var bot = new builder.UniversalBot(connector);
bot.set("persistConversationData", true);

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
  connector: connector
};