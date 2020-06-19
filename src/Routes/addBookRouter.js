const express = require("express");
const fs=require("fs");
const path=require("path");
const addBookRouter = express.Router();
const { nav } = require("../../nav");
const { parse } = require('querystring');
var bodyParser  = require('body-parser');

 

addBookRouter.get("/", function (req, res) {
  res.render("addbook", {
    nav,
    title: "add New Book",
    active: "addbook",
  });
});

var qs = require('querystring');

 function getPost(request, response) {
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

       request.on('end', function () {
            var post = qs.parse(body);
            // use post['blah'], etc.
            const filepath=path.join(__dirname,"../../books.js");

            let previousFile=fs.readFileSync(filepath,{encoding:'utf-8'}).toString();
            previousFile=previousFile.split('\n')
            previousFile.splice(-2,2);
            previousFile=previousFile.join('\n');
            fs.writeFileSync(filepath,previousFile);
            let data=",\n";
            data+=JSON.stringify(post,null,4);
           
            data+="\n];\nexports.books = books;"
            fs.appendFileSync(filepath,data);
            response.send("your book is added please go back and check your book in books page");
        });
      }
    
}

// Access the parse results as request.body
addBookRouter.post('/',getPost);


exports.addBookRouter = addBookRouter;
