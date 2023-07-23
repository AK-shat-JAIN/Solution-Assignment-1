const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

function work(chlnName){
    console.log(`Thanks for subscribing to ${chlnName}`);
}

eventEmitter.on("subscribe", work);

eventEmitter.emit("subscribe", " College Wallah");

console.log(`Max Listeners: ${eventEmitter.getMaxListeners()}`);
eventEmitter.setMaxListeners(0)
console.log(`Max Listeners: ${eventEmitter.getMaxListeners()}`);