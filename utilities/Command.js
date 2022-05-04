class Command {
  #sock = null;
  #sender = null;
  constructor(sock, sender) {
    this.#sock = new sock;
    this.#sender = sender;
  }
  message(text) {
    this.#sock.sendMessage(text, this.#sender)
  }
}

module.exports = Command;