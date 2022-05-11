class Command {
  #sock = null;
  #sender = null;
  constructor(sock, sender) {
    this.#sock = sock;
    this.#sender = sender;
  }
  message(file, ...data) {
    let text;
    if(file.endsWith(".js")){
    text = this.tmpmsg(file, ...data);
    }else{
      text = {text:file};
    }
    console.log(text);
    this.#sock.sendMessage(this.#sender, text);
  }
  tmpmsg(file, ...data) {
    return require("../tplmsg/" + file)(...data);
  }
  getDatabase(file) {
    return require("../databases/" + file);
  }
}

module.exports = Command;
