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

router.put('/', function(req, res, next) {
  var db = req.db;
  var usersCollection = db.get('users');
  var FName = req.body.changeFName
  var LName = req.body.changeLName
  var email = req.body.changeEmail
  var password = req.body.changePassword
  // usersCollection.update({_id: req.session.userId},{firstName}, function(err, docs) {
      
  // });
});

module.exports = router;
