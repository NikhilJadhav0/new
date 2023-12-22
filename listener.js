const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Add three listeners to the 'myEvent' event
myEmitter.on('myEvent', () => console.log('Listener 1'));
myEmitter.on('myEvent', () => console.log('Listener 2'));
myEmitter.on('myEvent', () => console.log('Listener 3'));

// Count the number of listeners for the 'myEvent' event
const listenerCount = myEmitter.listenerCount('myEvent');
console.log(`Number of listeners: ${listenerCount}`);