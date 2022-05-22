const fs = require("fs");
class Command {
  #command = "Test";
  #option = "ping";
  #data = [];
  constructor(pesan) {
    pesan = pesan.split(" ");
    this.#command = pesan[0];
    pesan.shift();
    this.#option = pesan[0];
    pesan.shift();
    if (pesan.length > 0) {
      this.#data = pesan;
    }
    if (fs.existsSync("./commands/" + this.#command + ".js")) {
      this.#command = require("../commands/" + this.#command + ".js");
      this.#command = new this.#command();
    }}
}

module.exports = Command;
