const Command = require("../utilities/Command.js");
const fs = require("fs");
class Info extends Command {
  help() {
    let commands = fs.readdirSync("./commands/");
    commands = commands.map((c) => "*" + c.replace(".js", "") + "*");
    commands = commands.join("\n");
    let options = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    options.shift();
    options = options.map((o) => "*" + o + "*");
    options = options.join("\n");
    this.message("info/help.js", this.nama, commands, options);
  }
  user() {
    this.message("ini command info dengan option user");
  }
  bot() {
    this.message("ini command info dengan option bot");
  }
}

module.exports = Info;
