const Command = require("../utilities/Command");
class Test extends Command {
  help() {
    console.log("Test help");
  }
  ping() {
    console.log("pong");
  }
  hallo() {
    console.log("haaaiiii");
  }
  testing() {
    this.message("hallo");
  }
}

module.exports = Test;