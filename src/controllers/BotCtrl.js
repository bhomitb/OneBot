//Initiate Bot
var builder = require("botbuilder");
var botsetup = require("../botSetup");
var bot = botsetup.bot;
var intents = botsetup.intents; //Define intents from luis model

//Import Dialogs
// var Greeting = require("./resources/Dialogs/Greetings");
var Help = require("../../resources/dialogs/help");

intents.onDefault(Help.dialogs);

//Routes bot dialogs to specific intent dialogs
bot.dialog("/", intents);