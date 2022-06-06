class Command {
  #sock = null;
  #sender = null;
  constructor(sock, sender) {
    this.#sock = sock;
    this.#sender = sender;
  }

  message(pesan) {
    this.#sock.sendMessage(this.#sender, pesan);
  }
}

module.exports = Command;
