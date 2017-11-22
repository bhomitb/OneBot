var builder = require("botbuilder");

const helpDialog = {
  name: "helpDialog",
  dialogs: [
    function(session, args, next) {
        session.send(
          "Sorry I did not get that, Start by telling me your name!"
        );
    }
  ]
};
module.exports = helpDialog;