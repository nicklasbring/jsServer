var http = require('http');
var dato = require('./dato');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var studerende = {};
  studerende.navn = "Nicklas";
  studerende.efternavn = "Nielsen";
  studerende.studerer = true;
  studerende.skole = "Datamatiker Zealand";
  studerende.adresse = "Frisegade";
  studerende.postnummer = "4800";
  studerende.by = "Nykobing Falster";
  studerende.dato = dato.dateTime();
    console.log(studerende.dato);
  res.write(JSON.stringify(studerende));
  res.end();
}).listen(8080);