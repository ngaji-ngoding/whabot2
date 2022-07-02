const Command = require("../utilities/Command");
class Members extends Command {
  help() {
    this.message("ini helper Members");
  }
  join(email) {
    this.dbFs("members.json").insertData({
      nama: this.nama,
      noHp: this.noHp,
      email,
      level: "basic",
    });
  }
}
