const fs = require("fs");

class Dbfs {
  #namaDir = "databases";
  constructor(namaFile) {
    this.namaFile = namaFile;
    if (!fs.existsSync(this.#namaDir)) {
      fs.mkdirSync(this.#namaDir);
    }
    if (!fs.existsSync(this.#namaDir + "/" + namaFile)) {
      fs.writeFileSync(this.#namaDir + "/" + namaFile, "[]");
    }
  }
  insertData(data) {
    if (fs.existsSync(this.#namaDir + "/" + this.namaFile)) {
      let dataMembers = require("../" + this.#namaDir + "/" + this.namaFile);
      dataMembers.push(data);
      fs.writeFileSync(
        this.#namaDir + "/" + this.namaFile,
        JSON.stringify(dataMembers)
      );
    }
  }
}
module.exports = Dbfs;
