const Command = require("../utilities/Command");
class Members extends Command {
  help() {
    this.message("ini helper Members");
  }
  join(email) {
    const nama = this.nama;
    const noHp = this.sender.split("@")[0];
    const emailPattren =
      /^([a-zA-z\.-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;
    if (!email) {
      this.message("data tidak di disimpan, anda harus menyertakan email");
    } else if (!emailPattren.test(email)) {
      this.message("fomat email salah");
    } else if (emailPattren.test(email)) {
      this.dbFs("members.json").insertData({
        nama,
        noHp,
        email,
        level: "basic",
      });
      this.message("data berhasil disimpan");
    }
  }
}
module.exports = Members;
