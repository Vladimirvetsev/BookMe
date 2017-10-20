var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var hotelcollections = req.dbhotels.get('hotels');
    hotelcollections.find({})
        .then(function (data) {
            res.json(data);
            // console.log(data);
        }).catch(function (err) {
            res.json(500, err);
        });
});
module.exports = router;
