var express = require('express');
var router = express.Router();

router.get('/shapes', function(req, res) {

  res.render('shapes', {
    pageTitle: 'Shapes',
    pageID: 'shapes'
  });
});

module.exports = router;
