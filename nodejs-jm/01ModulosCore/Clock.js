'use strict';

class Clock {
  constructor() {
    setInterval(() => {
      this.theTime();
    }, 1000);
  }

  theTime() {
    const date = new Date(),
      hrsAmPm = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
      hrs = addZero(hrsAmPm),
      min = addZero(date.getMinutes()),
      sec = addZero(date.getSeconds()),
      ampm = date.getHours() < 12 ? 'am' : 'pm',
      // msg = hrs + ':' + min + ':' + sec + ampm;
      msg = `${hrs}:${min}:${sec}:${ampm}es6`;

    function addZero(num) {
      return num < 10 ? '0' + num : num;
    }

    console.log(msg);
  }
}

module.exports = Clock;
