var express = require('express');
var router = express.Router();


//set routers

router.get('/api/team', function(req,res,next){
    res.send('This is the team page');
});

module.exports = router;
