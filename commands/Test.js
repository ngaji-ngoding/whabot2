const Command = require("../utilities/Command.js");
class Test extends Command {
  help() {
    this.message({ text: "ini command Test dengan option help" });
  }
  ping() {
    this.message({ text: "pong" });
  }
  hallo(nama) {
    this.message({ text: "haiii! anda memasukkan nama :" + nama });
  }
}

module.exports = Test;
