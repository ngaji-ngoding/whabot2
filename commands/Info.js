const Command = require("../utilities/Command");
class Info extends Command {
  this.help= function() {
    console.log(JSON.stringify(this));
  }
  this.user=function(nama, umur) {
    this.message("data dengan nama " + nama + " dan umur " + umur);
  }
}

module.exports = Info;
