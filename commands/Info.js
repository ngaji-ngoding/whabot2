const Command = require("../utilities/Command");
class Info extends Command {
  help(data) {
    console.log("info help");
    console.log(data);
  }
  user(nama, umur) {
    this.message("data dengan nama "+nama+" dan umur "+umur);
  }
}

module.exports = Info;