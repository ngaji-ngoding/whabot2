const Command = require("../utilities/Command");
class Members extends Command {
  help() {
    this.message("ini helper Members");
  }
  join(email) {
    const nama = this.nama;
    const noHp = this.sender;
    this.dbFs("members.json").insertData({
      nama,
      noHp,
      email,
      level: "basic",
    });
  }
}
module.exports = Members;
