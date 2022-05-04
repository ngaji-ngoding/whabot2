let readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const Command = require("./utilities/Command.js");

function chat() {
  rl.question('masukkan pesan anda:\n', (pesan)=> {
    new Command().getCommand(pesan);
    chat();
  });
}
chat();