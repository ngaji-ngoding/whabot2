const Command = require("../utilities/Command");
class Test extends Command {
  help() {
    let option = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    option.shift();
    option = option.toString().replace(/,/gm, "\n");
    this.message("option yg tersedia untuk command Test adalah\n"+option);
  }
  ping() {
    this.message("test/ping.js");
  }
  hallo(nama) {
    let data = [nama];
    this.message("test/hallo.js", ...data);
  }
  menu() {
    let db = this.getDatabase("menu.json");
    this.message("test/menu.js", db);
  }
}

module.exports = Test;
