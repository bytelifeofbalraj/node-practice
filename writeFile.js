const fs = require("node:fs");

const content = "Line one from practice.\nLine two from practice.\nLine three.";

fs.writeFile("writtenByNode.txt", content, "utf8", (err) => {
  if (err) {
    console.log("Something went wrong", err.message);
    return;
  }

  console.log("File written successfully.");
});
