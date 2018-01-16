var express = require('express');
var router = express.Router();
// var ApiMethod = require('../ApiMethod/ApiMethod');
var co = require('co');
router.get('/index.html',function(req,res){
    var pageData = {
        title:'lyx的express',
        show:{
            name:'H5页面上的音频',
            tel:'135678905'
        },
        // tel:'444345'
    };
    res.render('../views/index',pageData);
    
});
module.exports = router;