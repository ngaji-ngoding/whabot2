class Command {
  #sock = null;
  #sender = null;
  constructor(sock, ...dataSender) {
    this.#sock = sock;
    this.#sender = dataSender[0];
    this.nama = dataSender[1];
  }

  message(pesan, ...data) {
    let file;
    if (pesan.endsWith(".js")) {
      file = require("../messages/" + pesan)(...data);
    } else {
      file = { text: pesan };
    }
    this.#sock.sendMessage(this.#sender, file);
  }
  dbFs(namaFile) {
    const DB = require("./database.js");
    return new DB(namaFile);
  }
}

module.exports = Command;
