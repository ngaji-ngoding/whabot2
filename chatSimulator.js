let readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const App = require("./utilities/App.js");

function socket() {
  return {
    sendMessage(sender, pesan) {
      console.log("no tujuan :" + sender);
      console.log("isi pesan :" + JSON.stringify(pesan));
    },
  };
}

function chat() {
  const sender = "085765123489";
  const sock = socket();
  rl.question("masukkan pesan anda:\n", (pesan) => {
    new App(pesan, sock, sender);
    chat();
  });
}
chat();
