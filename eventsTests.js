const eventEmitter = require("node:events");
const emitter = new eventEmitter();

emitter.on("order placed", (orderId, amount) => {
  console.log(`Order ${orderId} placed for ${amount}`);
  console.log("Sending confirmation email...");
});

emitter.on("order placed", (orderId) => {
  console.log(`Updating order for order ${orderId}`);
});

emitter.on("order placed", (orderId) => {
  console.log(`Logging order ${orderId} to analytics`);
});

console.log("About to place an order...");
emitter.emit("order placed", 1001, 49.99);
emitter.emit("order placed", 1002, 142);
console.log("Done.");
