let readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const Command = require("./utilities/Command.js");
const App = require("./utilities/init");

function sock() {
  this.sendMessage = function (sender, text) {
    console.log(`mengirim pesan\n\n ${text} \n\nke ${sender}`);
  };
}

function chat() {
  const sender = "085123456789";
  rl.question("masukkan pesan anda:\n", (pesan) => {
    new App(pesan, sock, sender);
    chat();
  });
}
chat();
