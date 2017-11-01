var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });
// router.get('/', function (req, res, next) {
//   var userCollection = req.dbusers.get('userList');
//   userCollection.find({}, {}, function(err,docs) {
//     console.log(docs)
//       res.redirect("/")
//   })
// })
  router.post('/', function(req, res, next) {
    var userEmail = req.body.email;
    var userPassword = req.body.password;
    var userCollection = req.dbusers.get('userList');
    userCollection.find({ email: userEmail, password: userPassword }, function(err, docs) {
        if (docs != null && docs.length > 0) {
            // req.session.userId = docs[0]._id;
            res.redirect("/");
        } else {
          res.redirect("/#!/secondPage")
        }
          });
        });

module.exports = router;