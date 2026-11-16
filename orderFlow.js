const eventEmitter = require("node:events");
const shop = new eventEmitter();

//listeners

shop.on("order-placed", (order) => {
  console.log(`[EMAIL] Sending confirmation for order ${order.id}`);
});

shop.on("order-placed", (order) => {
  console.log(`[INVENTORY] Reducing stock for ${order.product}`);
});

shop.on("order-placed", (order) => {
  console.log(`[ANALYTICS] Logging $${order.amount} sale`);
});

// function that place an order

function placeOrder(id, product, amount) {
  const order = { id, product, amount };
  console.log(`[DB] Saving order ${id} to database`);
  shop.emit("order-placed", order);
  console.log(`[DONE] Order ${id} processed`);
}

placeOrder(5001, "Running Shoes", 89.99);
