const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const newServer = http.createServer((req, res) => {
  //lodash
  const num = _.random(2, 89);
  console.log(num);

  const titanCall = _.once(() => {
    console.log("Jenny");
  });

  titanCall();
  titanCall();
  //set header
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      break;
    case "/about-titan":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //sending an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      res.end(data);
    }
  });
});

newServer.listen(4000, "localhost", () => {
  console.log("listening on port 4000");
});
