var express = require('express');
var strftime = require('strftime')

var router = express.Router();
// router.on('mount', function (parent) {
//     console.log('Admin Mounted');
//     console.log(`time is ${strftime('%F %T', new Date())}`)
//     console.log(parent); // refers to the parent app
//   });

router.get('/', function (req, res, next) {
    res.send('<h1>欢迎光临管理员</h1>')    
})

module.exports = router;