var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

const express = require('express');
const app = express();
const router = express.Router();

var httpsServer = https.createServer(credentials,app);


const path = __dirname + '/views';

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
   res.sendFile(path + 'index.html');
});


app.use(express.static(path));
app.use('/', router);

httpsServer.listen(8443)
