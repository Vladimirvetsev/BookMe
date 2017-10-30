var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });
router.get('/', function (req, res, next) {
  var usercollections = req.dbusers.get('userCollection');
  usercollections.find({}, {}, function(err,docs) {
      console.log("asd")
      res.json({docs})
      
  })
    //   .then(function (datausers) {
    //       res.json(datausers);
    //       console.log(datausers);
    //   }).catch(function (err) {
    //       res.json(500, err);
    //   });
});

// router.post('/', function(req,res,next){
//   if(req.body.username==="vladimir"){
//     console.log(req.body)
//     req.session.username='vladimir';
//     res.redirect('/');
//   }
  // console.log('muchi se veee');
  // var username= req.body.username;
// })
module.exports = router;