const car = {
  // Complete here
  start: function () {
    this.speed = 0;
    this.minutes = 0;
    this.distance = 0;

    return this;
  },
  changeSpeed: function (speed) {
    //console.log(speed + "kmh");
    this.speed = speed;
    return this;
  },
  drive: function (time) {
    //console.log(time + "min");
    this.time = time;
    this.distance = this.distance + Math.round((this.speed * this.time) / 6) / 10;
    return this;
  },
  showDistance: function () {
    console.log(this.distance + " Km");
    return this;
  },
};

module.exports = car;
