var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var db = req.db;
  var usersCollection = db.get('users');
  usersCollection.find({ _id: req.session.userId }, function (err, docs) {
    res.json(docs);
  });
});

router.put('/', function (req, res, next) {
  var db = req.db;
  var usersCollection = db.get('users');
  var FName = req.body.changeFName
  var LName = req.body.changeLName
  var newEmail = req.body.changeEmail
  var newPassword = req.body.changePassword
  var confirmPassword = req.body.confirmPassword
  if (newPassword == confirmPassword) {
    usersCollection.find({ _id: req.session.userId }, {}, function (e, result) {
      if (result[0].name != null) {
        res.json({ error: "Facebook or Google users can't edit their profile information" })
      } else {
        usersCollection.update({ _id: req.session.userId }, { "$set":{ firstName: FName, lastName: LName, email: newEmail, password: newPassword }}, function (err, docs) {
          res.json(docs)
        });
      }
    })
  } else {
    res.json({ error: "Password is not the same" })
  }
});


router.put('/hotels', function (req, res, next) {
  var db = req.db;
  var hotelsCollection = db.get('hotels');
  hotelsCollections.update({_id:req.session.userId}, {$push: {arrayFavoriteHotels: req.body}}, function (err, docs) {
    res.json(docs);
  });
});

module.exports = router;
