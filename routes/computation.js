var express = require('express');
var router = express.Router();


/* GET computation. */
router.get('/', function(req, res, next) {

  console.log(req.query.x)

  let randomNumber = req.query.x ? req.query.x : Math. floor(Math. random()*10) + 1;

  res.send(`Math.clz32() applied to ${randomNumber} is ${Math.clz32(randomNumber)}`);
});

module.exports = router;
