const fs = require("node:fs");

fs.readFile("product.json", "utf8", (err, data) => {
  if (err) {
    console.log(`Error: ${err.message}`);
    return;
  }

  console.log("file contents");
  const product = JSON.parse(data);
  console.log(product.name);
});
