var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var hotelcollections = req.db.get('hotels');
    hotelcollections.find({})
        .then(function (data) {
            res.json(data);
            // console.log(data);
        }).catch(function (err) {
            res.json(500, err);
        });
});
router.post('/', function (req, res, next) {
    var db=req.db;
    var hotelcollections =db.get('hotels');
    var newHotel=req.body;
    console.log(newHotel)
   hotelcollections.insert(newHotel,function(e,r){
       res.json(r);
   })
});
module.exports = router;
