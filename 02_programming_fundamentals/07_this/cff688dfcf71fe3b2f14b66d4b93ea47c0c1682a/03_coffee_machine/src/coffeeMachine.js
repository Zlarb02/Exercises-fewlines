const machine = {
  // Complete here
  litersOfCoffee:0,
  fillWithLitersOfCoffee: function (litersofcoffee){
    this.litersOfCoffee = this.litersOfCoffee + litersofcoffee;
    return this ;
  },
  expresso: function () {
    while (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee = this.litersOfCoffee - 0.08;
      return true;
    }
    return false;
  },
  longCoffee: function () {
    while (this.litersOfCoffee >= 0.15) {
      this.litersOfCoffee = this.litersOfCoffee - 0.15;
      return true;
    }
    return false;
  }
    
};
/*
const machine = {
  // Complete here
  litersOfCoffee:0,
  fillWithLitersOfCoffee: function(litersOfCoffee) {
    this.litersOfCoffee=litersOfCoffee;
    return this;
  },
  expresso: function() {
    if (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee = this.litersOfCoffee - 0.08;
      return true;
    }
    return false;
  },
  longCoffee: function() {
    if (this.litersOfCoffee >= 0.15) {
      this.litersOfCoffee=this.litersOfCoffee - 0.15;
      return true;
    }
    return false;
  },                        
};*/


module.exports = machine;
