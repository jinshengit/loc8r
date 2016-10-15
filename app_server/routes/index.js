var express = require('express');
var router = express.Router();
//引用main.js
var ctrlMain = require('../controllers/main');

var homepageController = function(req, res){
	res.render('index', {
		title: 'Express'
	});
};

//调用main.js中的index方法
router.get('/', ctrlMain.index);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
