const express = require("express");
const app = express();
const port = 3000;

var axios = require("axios");
var request = require("request");
var cheerio = require("cheerio");
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/scrape", (req, res) => {
  //   var config = {
  //     headers: { "Content-Type": "application/json" }
  //   };
  //   axios.get("https://www.nytimes.com/", config).then(function(data) {
  //     console.log(data);
  //
  //   });
  request("https://www.nytimes.com/", function(error, response, body) {
    // console.log(error);
    console.log(response);
    // console.log(body);
    var $ = cheerio.load(body);
    console.log("label Cheerio Test", $(".css-1w0yruz").html());
  });
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
