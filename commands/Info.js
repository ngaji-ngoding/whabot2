const Command = require("../utilities/Command.js");
class Info extends Command {
  help() {
    this.message("info/help.js", this.nama);
  }
  user() {
    this.message("ini command info dengan option user");
  }
}

module.exports = Info;
