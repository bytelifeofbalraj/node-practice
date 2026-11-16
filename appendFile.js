const fs = require("node:fs");

const newLine = "\nThis line was added by appendFile.";

fs.appendFile("writtenByNode.txt", newLine, "utf8", (err) => {
  if (err) {
    console.log(`Error: ${err.message}`);
    return;
  }

  console.log("New line appended succesfully.");
});
