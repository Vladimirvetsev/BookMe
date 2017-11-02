var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
  var userCollection = req.db.get('users');
  var user = req.body
  userCollection.find(user, function (err, docs) {
    res.json(docs)
  });
});

module.exports = router;