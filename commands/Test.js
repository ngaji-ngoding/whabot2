const Command = require("../utilities/Command");
class Test extends Command {
  help() {
    console.log("Test help");
  }
  ping() {
    this.message("tmpmsg/test/ping.js");
  }
  hallo(nama) {
    let data = [nama];
    this.message("tmpmsg/test/hallo.js", ...data);
  }
  menu(...data) {
    this.message("tmpmsg/test/menu.js");
  }
}

module.exports = Test;
