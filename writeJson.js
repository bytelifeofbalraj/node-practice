const fs = require("node:fs");

const product = {
  id: 1,
  name: "running shoes",
  price: 89.99,
  inStock: true,
};

const jsonContent = JSON.stringify(product, null, 2);

fs.writeFile("product.json", jsonContent, "utf8", (err) => {
  if (err) {
    console.log("Error", err.message);
  }

  console.log("Product Saved");
});
