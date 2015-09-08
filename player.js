var players = [
  {
    "id": "dr31hHdce",
    "name": "Leonel Messi",
    "club": "Barcelona",
    "national": "Argentina",
    "age": 27
  },
  {
    "id": "yuH3c9inZ",
    "name": "Cristiano Ronaldo",
    "club": "Real Madrid",
    "national": "Portugal",
    "age": 29
  },
  {
    "id": "q8hcNoeT3",
    "name": "Luis Suarez",
    "club": "Liverpool",
    "national": "Uruquay",
    "age": 27
  }
];

exports.getAllPlayer = function() {
  return players;
};

exports.getPlayerById = function(id) {
  for (var i = 0; i < players.length; i++) {
    if (players[i].id == id) return players[i];
  }
};