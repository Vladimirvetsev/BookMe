var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var usersCollection = db.get('users');
  usersCollection.find({_id: req.session.userId}, function(err, docs) {
      res.json(docs);
  });
});

module.exports = router;
