var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var db

MongoClient.connect('mongodb://admin:ccbd1@ds143030.mlab.com:43030/imagedb', function(err, database) {
  if (err) return console.log(err)
  db = database
})

/* GET users listing. */
router.post('/', function(req, res, next) {
  db.collection('quotes').save(req.body, function(err, result){
    if (err) return console.log(err)
    console.log(req.body)
    console.log('saved to database')
    res.redirect('/')
  })
});

router.post('/get/', function(req, res, next) {
  db.collection('quotes').find().toArray(function(err, docs){
     assert.equal(null, err);
     assert.equal(3, docs.length);
  });
});

module.exports = router;
