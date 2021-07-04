//Read Files

const fs = require("fs");

// fs.readFile("./gypsy/blog.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//Write files

// fs.writeFile("./gypsy/blog.txt", "hello titans", () => {
//   console.log("files were added");
// });

//directories

if (!fs.existsSync("./titans")) {
  fs.mkdir("./titans", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file was created");
    }
  });
} else {
  fs.rmdir("./titans", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder deleted");
  });
}

//deleting files
if (fs.existsSync("./gypsy/blog.txt")) {
  fs.unlink("./gypsy/blog.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted successfully");
  });
}
