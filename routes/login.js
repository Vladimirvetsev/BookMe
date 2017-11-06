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

router.put('/', function (req, res, next) {
  var userCollection = req.db.get('users');
  var newUser = req.body
  userCollection.find({ email: newUser.email, password: newUser.password }, function (err, docs) {
    if (docs != null && docs.length > 0) {
      res.json({error:"User already exists"})
    } else {
      userCollection.insert(newUser)
      userCollection.update({ firstName: newUser.firstName }, { "$set": { arrayBookings: [], arrayVisitedHotels: [], arrayFavoriteHotels: [], arrayOwnHotel: [] } }, function (e, result) {
        res.json(result)
      })
    }
  })
});

router.put('/other', function (req, res, next) {
  var userCollection = req.db.get('users');
  var newUser = req.body
  userCollection.find({name: newUser.name}, function (err, docs) {
    console.log(docs)
    if (docs.length == 0) {
      userCollection.insert(newUser)
      userCollection.update({ name: newUser.name }, { "$set": { arrayBookings: [], arrayVisitedHotels: [], arrayFavoriteHotels: [], arrayOwnHotel: [] } }, function (e, result) {
        res.json(result)
      })
    } else {
      res.json(docs)
    }
  })
});

// router.put('/google', function (req, res, next) {
//   var userCollection = req.db.get('users');
//   var newUser = req.body
//   userCollection.find({name: newUser.name}, function (err, docs) {
//     if (docs.length == 0) {
//       userCollection.insert(newUser)
//       userCollection.update({ name: newUser.name }, { "$set": { arrayBookings: [], arrayVisitedHotels: [], arrayFavoriteHotels: [], arrayOwnHotel: [] } }, function (e, result) {
//         res.json(result)
//       })
//     } else {
//       res.json(docs)
//     }
//   })
// });

module.exports = router;