var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './uploads' });
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
router.put('/:id',function(req,res,next){
    var hotelcollections = req.db.get('hotels')
    var id = req.params.id;
    console.log(id);
    // console.log(req);
    console.log(req.body);
    var hotels=req.body;
    hotelcollections.update(
        {_id:id},
        {$push: {storedDates:hotels}},function(e,r){
            res.json(r);
        })
})
router.put('/:id',function(req,res,next){
    var hotelcollections = req.db.get('hotels')
    var id = req.param.id;
    console.log(id);
    // console.log(req);
    console.log(req.body);
    var hotels=req.body;
    hotelcollections.update(
        {_id:id},
        {$push: {views:hotels}},function(e,r){
            res.json(r);
        })
})
// router.post('/uploads', function (req, res, next) {
// });
// router.post('/upload', upload.array('customers', 1), function (req, res, next) {
//     console.log(req.body);
//     console.log(req.files);
//     res.json({success:true});
//   // req.files is array of `photos` files
// })

module.exports = router;