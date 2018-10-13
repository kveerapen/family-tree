var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
  	id: 1,
  	username: "Kieren"
  }, 
  {
  	id: 2,
  	username: "Ritchie"
  },
  {
  	id: 3,
  	username: "Shane"
  }]);
});

module.exports = router;
