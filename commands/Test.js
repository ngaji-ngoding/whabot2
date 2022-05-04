const Command = require("../utilities/Command");

class Test extends Command {
  constructor(pesan) {
    super(pesan);
  }
  help() {
    console.log("test help");
  }
}

module.exports = Test;