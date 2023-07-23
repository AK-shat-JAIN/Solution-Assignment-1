const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

function work(chlnName){
    console.log(`Thanks for subscribing to ${chlnName}`);
}

eventEmitter.on("subscribe", work);

console.log("Calling event listner before removing the event.");

eventEmitter.emit("subscribe", " College Wallah");

eventEmitter.off("subscribe", work);

console.log("Calling event listner after removing the event.");

eventEmitter.emit("subscribe", " College Wallah");