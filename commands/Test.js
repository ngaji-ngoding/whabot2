const Command = require("../utilities/Command.js");
class Test extends Command {
  help() {
    this.message("ini command Test dengan option help");
  }
  ping() {
    this.message("pong");
  }
  hallo(nama) {
    this.message("haiii! anda memasukkan nama :" + nama);
  }
}

module.exports = Test;
