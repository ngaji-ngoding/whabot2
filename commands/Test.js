const Command = require("../utilities/Command");
class Test extends Command {
  help() {
    console.log("Test help");
  }
  ping() {
    this.message("test/ping.js");
  }
  hallo(nama) {
    let data = [nama];
    this.message("test/hallo.js", ...data);
  }
  menu(...data) {
    let db = this.getDatabase("menu.json");
    this.message("test/menu.js", db);
  }
}

module.exports = Test;
