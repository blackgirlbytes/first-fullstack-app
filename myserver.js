const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
   }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
   fs.readFile('js/main.js', function(err, data) {
     res.writeHead(200, {'Content-Type': 'text/javascript'});
     res.write(data);
     res.end();
   });
 }else if (page == '/otherpage'){
  fs.readFile('otherpage.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}else if (page == '/css/otherpgstyle.css'){
 fs.readFile('css/otherpgstyle.css', function(err, data) {
   res.writeHead(200, {'Content-Type': 'text/css'});
   res.write(data);
   res.end();
 });
}else if (page == '/js/main.js'){
 fs.readFile('js/main.js', function(err, data) {
   res.writeHead(200, {'Content-Type': 'text/javascript'});
   res.write(data);
   res.end();
 });
}else if (page == '/js/otherpgscript.js'){
 fs.readFile('js/otherpgscript.js', function(err, data) {
   res.writeHead(200, {'Content-Type': 'text/javascript'});
   res.write(data);
   res.end();
 });
}else if (page == '/thirdpg'){
 fs.readFile('thirdpg.html', function(err, data) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(data);
   res.end();
 });
}else if (page == '/css/thirdpgstyle.css'){
 fs.readFile('css/thirdpgstyle.css', function(err, data) {
   res.writeHead(200, {'Content-Type': 'text/css'});
   res.write(data);
   res.end();
 });
}else if (page == '/js/thirdpgscript.js'){
 fs.readFile('js/thirdpgscript.js', function(err, data) {
   res.writeHead(200, {'Content-Type': 'text/javascript'});
   res.write(data);
   res.end();
 });
}else if (page == '/apiReceive'){                  /// else if(){}
 fs.readFile('apiReceive.html', function(err, data) {
   res.writeHead(200, {'Content-Type': 'text/HTML'});
   res.write(data);
   res.end();
 });
}else if (page == '/js/apiscript.js'){
  fs.readFile('js/apiscript.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  });
}else if (page == '/api') {
   if('company' in params){
     if(params['company']== 'HubSpot'){
       res.writeHead(200, {'Content-Type': 'application/json'});
       var objToJson = {
         location: "Cambridge",
         industry: "Software and Marketing",
         type: "Scale Up"
       }
       res.end(JSON.stringify(objToJson));
     }//company = hubspot
     else if(params['company'] != 'HubSpot'){
       res.writeHead(200, {'Content-Type': 'application/json'});
       var objToJson = {
         location: "unknown",
         industry: "unknown",
         typeS: "unknown"
       }
       res.end(JSON.stringify(objToJson));
     }//student != leon
   }//student if
 }
//else if
});


server.listen(8000);
