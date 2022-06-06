const Command = require("../utilities/Command.js");
class Info extends Command {
  help() {
    this.message({ text: "ini command info dengan option help" });
  }
  user() {
    this.message({ text: "ini command info dengan option user" });
  }
}

module.exports = Info;
