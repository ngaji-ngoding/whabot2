const fs = require("fs");
class App {
  #command = "Test";
  #option = "help";
  #data = [];
  constructor(pesan, sock, sender) {
    pesan = pesan.split(" ");
    if (fs.existsSync("./commands/" + pesan[0] + ".js")) {
      this.#command = pesan[0];
    }
    this.#command = require("../commands/" + this.#command + ".js");
    this.#command = new this.#command(sock, sender);
    pesan.shift();
    if (this.#command[pesan[0]]) {
      this.#option = pesan[0];
    }
    pesan.shift();
    if (pesan.length > 0) {
      this.#data = pesan;
    }
    this.#command[this.#option](...this.#data);
  }
}

module.exports = App;
