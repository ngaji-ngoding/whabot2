class Command {
  #sock = null;
  #sender = null;
  constructor(sock, sender) {
    this.#sock = new sock();
    this.#sender = sender;
  }
  message(file, ...data) {
    let text = this.tmpmsg(file, ...data).text;
    this.#sock.sendMessage(this.#sender, text);
  }
  tmpmsg(file, ...data) {
    return require("../" + file)(...data);
  }
  getDatabase(file) {
    return require("../databases/" + file);
  }
}

module.exports = Command;
