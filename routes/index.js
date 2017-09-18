var express = require('express');
var router = express.Router();
var mongo = require("mongodb");

var url = "mongodb://localhost:27017/bandas";

function getBandas(callback) {
  mongo.connect(url, (err, db) => {
    if(err) throw err;

    var bandas = db.collection("things");
    bandas.find({}).toArray((err2, bandas) => {
      if(err2) throw err2;
      callback(bandas);
    })
  })
}

/* GET home page. */
router.get('/bandas', function(req, res) {
  getBandas((bandas) => {
    res.json(bandas);
  });
});

module.exports = router;
