var express = require('express');
var players = require('./player');

var app = express();
var port = 80;
var router = express.Router();

router.use(function(req, res, next) {
  console.log('%s %s', req.method, req.path);
  next();  
});

router.get('/players', function(req, res, next) {
  res.json({ players: players.getAllPlayer() });
});

router.get('/players/:id', function(req, res, next) {
  var player = players.getPlayerById(req.params.id);
  res.json(player);
});

// Only requests to /api/ will be send to router.
app.use('/api', router);
app.listen(port);
console.log('Server listening on port ' + port);