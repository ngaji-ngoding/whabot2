const fs = require("fs");

class Dbfs {
  #namaDir = "databases";
  #path = null;
  constructor(namaFile) {
    if (namaFile) {
      this.namaFile = namaFile;
    } else {
      this.namaFile = "data.json";
    }
    this.#path = this.#namaDir + "/" + this.namaFile;
  }
  #chekDb() {
    return fs.existsSync(this.#path);
  }
  #createDb() {
    fs.writeFileSync(this.#path, "[]");
  }
  insertData(data) {
    if (this.#chekDb()) {
      let dataMembers = require("../" + this.#namaDir + "/" + this.namaFile);
      dataMembers.push(data);
      fs.writeFileSync(
        this.#namaDir + "/" + this.namaFile,
        JSON.stringify(dataMembers)
      );
    } else {
      this.#createDb();
      let dataMembers = require("../" + this.#namaDir + "/" + this.namaFile);
      dataMembers.push(data);
      fs.writeFileSync(
        this.#namaDir + "/" + this.namaFile,
        JSON.stringify(dataMembers)
      );
    }
  }
  getDatas() {
    return require("../" + this.#path);
  }
}
module.exports = Dbfs;
