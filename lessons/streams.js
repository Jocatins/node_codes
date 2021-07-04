const fs = require("fs");

const readData = fs.createReadStream("./gypsy/blog.txt", { encoding: "utf-8" });

const writeData = fs.createWriteStream("./gypsy/chunks.txt");

// readData.on("data", (chunk) => {
//   console.log("NEW CHUNK");
//   console.log(chunk);

//   writeData.write("\n New Chunks\n");
//   writeData.write(chunk);
// });

//piping

readData.pipe(writeData);
