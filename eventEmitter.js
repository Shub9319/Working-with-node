const EventEmitter = require('events');

const myEmitter = new EventEmitter();
 
myEmitter.emit('TEST_EVENT');  // nothing happen , -- firevent before  subscribe

myEmitter.on('TEST_EVENT',()=>{
    console.log("HI I am first subscriber");
})

myEmitter.on('TEST_EVENT',()=>{
    console.log("HI I am second subscriber");
})

myEmitter.on('TEST_EVENT',()=>{
    console.log("HI I am third subscriber");
})

myEmitter.on('TEST_EVENT',()=>{
    console.log("HI I am fourth subscriber");
})

myEmitter.emit('TEST_EVENT');   // fireevent after subscribing it

setImmediate(()=>{                  /// fireevent before describing it using setImmediate()
    myEmitter.emit('TEST_EVENT_1.0');
    
})

myEmitter.on('TEST_EVENT_1.0',()=>{
    console.log("HI I am first subscriber of 1.0");
})