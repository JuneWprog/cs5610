var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:user', function(req, res, next) {
  res.send('you are logged in as ' + req.params.user);
});

module.exports = router;
