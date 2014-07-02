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

	winston.info(ip);
	res.render('index',{index:'class=active', contact:'', articles:'', projects:'', title:''});
});

router.get('/resume', function(req, res) {
	res.redirect('/resume.pdf');
});

router.get('/contact', function(req, res) {
	res.render('contact',{index:'', contact:'class=active', articles:'', projects:'', title:'Contact - '});
});

router.get('/articles', function(req, res) {
	res.render('articles',{index:'', contact:'', articles:'class=active', projects:'', title:'Articles - '});
});

router.get('/projects', function(req, res) {
	res.render('projects',{index:'', contact:'', articles:'', projects:'class=active', title:'Projects - '});
});

router.get('/articles/2014/new-site', function(req, res) {
	res.render('articles/2014/new-site',{index:'', contact:'', articles:'', projects:'', title:'New Site - Hello Node.js - '});
});

router.get('/articles/2014/huffman', function(req, res) {
	res.render('articles/2014/huffman',{index:'', contact:'', articles:'', projects:'', title:'Huffman Coding - '});
});

module.exports = router;
