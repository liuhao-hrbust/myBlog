var express = require("express");
var path = require("path");
var app = express();
var fs = require("fs");

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
// app.get("/home/index.html", function(req, res) {
//   res.sendFile(path.join(__dirname, "src/home/index.html"));
// });
// app.get("/contact/index.html", function(req, res) {
//   res.sendFile(path.join(__dirname, "src/contact/index.html"));
// });
// app.use(express.static("public"));
var server = app.listen(3000, function() {});
app.get("/getList", function(req, res) {
  var root = path.join(__dirname, "/src/dist");
  var num = fs.readdirSync(root).length;
  var filenames = fs.readdirSync(root);
  // console.log(filenames);
  var wen = new Array();

  for (var i = 0; i < num; i++) {
    var target = path.join(root, filenames[i]);
    var issiues = new Object();
    issiues.article = filenames[i];
    // console.log(target);
    var content = fs.readFileSync(target, "utf-8");
    // console.log(content);
    var patternTitle = /^#\s([\u4E00-\u9FA5A-Za-z0-9_]+)/;
    var patternDescription = /^>\s([\u4E00-\u9FA5A-Za-z0-9_]+)/m;
    var patternTags = /tag:(.*)?/;
    issiues.title = content.match(patternTitle)[1];
    issiues.description = content.match(patternDescription)[1];
    issiues.tags = content.match(patternTags)[1];
    issiues.filename = filenames[i];
    wen.push(issiues);
  }
  wen = JSON.stringify(wen);
  // console.log(wen);
  res.send(wen + "");
});
app.get("/getContent", function(req, res) {});
