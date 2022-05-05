class Command {
  #sock = null;
  #sender = null;
  constructor(sock, sender) {
    this.#sock = new sock();
    this.#sender = sender;
  }
  message(file, ...data) {
    let text = this.tmpmsg(file, ...data);
    this.#sock.sendMessage(this.#sender, JSON.stringify(text));
  }
  tmpmsg(file, ...data) {
    return require("../" + file)(...data);
  }
}

module.exports = Command;
