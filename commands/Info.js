const Command = require("../utilities/Command");
const fs = require("fs");
class Info extends Command {
  show_command(){
let menu = fs.readdirSync("./commands/");
    let i = 1;
    menu = menu.map((m) =>(i++)+". *"+ m.replace(".js", "")+"*");
    menu = menu.toString().replace(/,/gm, "\n");
    this.message("info/menu.js", menu);
  }
  help() {
    this.show_command();
let option = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    option.shift();
    option = option.toString().replace(/,/gm, "\n");
    this.message("option yg tersedia untuk command Info adalah\n"+option);

  };
  user() {
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
