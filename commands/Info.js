const Command = require("../utilities/Command");
const fs = require("fs");
class Info extends Command {
  help = function () {
    let menu = fs.readdirSync("./commands/");
    menu = menu.map((m) => m);
    console.log(menu);
  };
  user = function () {
    const db = this.getDatabase("users.json");
    let nama = db.map((n) => n.nama);
    let email = db.map((e) => e.email);
    let data = [nama, email];
    this.message("info/user.js", ...data);
  };
  bot(...prop) {
    let db = this.getDatabase("bot.json");
    let data = {};
    if (prop.length > 0) {
      prop.forEach((p) => (data[p] = db[p]));
    } else {
      data = db;
    }
    data = Object.entries(data);
    this.message("info/bot.js", data);
  }
}

module.exports = Info;
