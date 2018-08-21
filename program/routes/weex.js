var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/test', function(req, res, next) {
  var data = {
    'a':'12121',
      'b':'2323232'
  }
  res.send(data)
});

router.get('/welcome',function(req,res,next) {
    var text = '我是微信服务器，欢迎和我通信'
    res.send(text);
})

module.exports = router;
