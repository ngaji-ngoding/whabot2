const Command = require("../utilities/Command");

class Test extends Command {
  help() {
    console.log(this);
  }
}

module.exports = Test;
