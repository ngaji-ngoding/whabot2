const fs = require("fs");
class App {
  #command = "Info";
  #option = "help";
  #data = [];
  constructor(pesan, sock, ...dataSender) {
    pesan = pesan[0].toUpperCase() + pesan.substring(1).toLowerCase();
    pesan = pesan.replace(/\n+/, " ");
    pesan = pesan.split(" ");
    if (fs.existsSync("./commands/" + pesan[0] + ".js")) {
      this.#command = pesan[0];
    }
    this.#command = require("../commands/" + this.#command + ".js");
    this.#command = new this.#command(sock, ...dataSender);
    pesan.shift();
    if (this.#command[pesan[0]]) {
      this.#option = pesan[0];
    }
    pesan.shift();
    if (pesan.length > 0) {
      pesan = pesan.join(" ");
      const keyValuePatrn = /--([a-zA-Z\d_]+) *(=|:) *([a-zA-Z@. ]+)/g;
      let data = {},
        d;
      while ((d = keyValuePatrn.exec(pesan))) {
        data[d[1]] = d[3];
      }
      if (Object.getOwnPropertyNames(data).length < 1) {
        this.#data = pesan.split(" ");
        this.#command[this.#option](...this.#data);
      } else {
        this.#data = data;
        this.#command[this.#option](this.#data);
      }
    }
  }
}

module.exports = App;
