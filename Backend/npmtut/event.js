const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('myname',()=>{
    console.log('my name is a afrozkhan');
})

eventEmitter.emit('myname');
eventEmitter.emit('myname');