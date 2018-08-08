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

module.exports = router;
