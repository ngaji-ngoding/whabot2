let readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const App = require("./utilities/init");

function socket() {
  this.sendMessage = function (sender, text) {
    console.log(`mengirim pesan\n\n ${text.text} \n\nke ${sender}`);
  };
}

function chat() {
  const sender = "085123456789";
  let sock = new socket();
  rl.question("masukkan pesan anda:\n", (pesan) => {
    new App(pesan, sock, sender);
    chat();
  });
}
chat();
