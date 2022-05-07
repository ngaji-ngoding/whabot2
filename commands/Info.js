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
    console.table(db);
    db.forEach((d) => console.log(d));
  };
  bot(...prop) {
    let db = this.getDatabase("bot.json");
    let data = {};
    if (prop.length > 0) {
      prop.forEach((p) => (data[p] = db[p]));
    } else {
      data = db;
    }
    this.message("tplmsg/info/bot.js", data);
  }
}

module.exports = Info;
