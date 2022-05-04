const fs = require("fs");
class Command {
  #command = "Test";
  #option = "help";
  #data = [];
  getCommand(pesan) {
    pesan = pesan.split(" ");
    console.log(pesan);
    if (fs.existsSync("./commands/" + pesan[0] + ".js")) {
      this.#command = pesan[0];
      pesan.shift();
      this.#command = require("../commands/" + this.#command + ".js");
      this.#command = new this.#command();
      if (this.#command[pesan[0]]) {
        this.#option = pesan[0];
        pesan.shift();
        if (pesan.length > 0) {
          this.#data = pesan;
          this.#command[this.#option](data);
        } else {
          this.#command[this.#option]();
        }
      }else{
      this.#command[this.#option]();
      }
    } else {
      this.#command = require("../commands/" + this.#command + ".js");
      this.#command = new this.#command();
      this.#command[this.#option]();
    }
  }
}

module.exports = Command;