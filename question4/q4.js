const events = require("events");
const Emitter = new events.EventEmitter();

const moment = require('moment');

const currentTimeCallback = () => {
    var wrapped = moment(new Date());
    var cd = moment(wrapped).format("dddd, MMMM Do YYYY");
    var ct = moment(wrapped).format("h:mm:ss a");

    console.log(` ${cd} : ${ct} `);
};

Emitter.on('currentTime', currentTimeCallback);

Emitter.emit('currentTime');
