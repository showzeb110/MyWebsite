var express = require('express');
var router = express.Router();
var winston = require('winston');

winston.add(winston.transports.File, { filename: 'somefile.log' });
/* GET home page. */
router.get('/', function(req, res) {
var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

//	console.log(ip);
winston.info(ip);
  res.render('index');
});

router.get('/resume', function(req, res) {
	res.redirect('/resume.pdf');
});

router.get('/contact', function(req, res) {
	res.render('contact');
});

module.exports = router;
