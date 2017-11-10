var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '$http与服务器通信' });
});

router.get('/post', function(req, res){
    res.render('post', {title: '$http与服务器通信'});
});

router.get('/filter', function(req, res){
    res.render('filter', {title: '与过滤器共舞'});
});

router.get('/form', function(req, res){
    res.render('form', {title: '测试'});
});

router.get('/jade', function(req, res){
    res.render('jadeTest', {title: 'Jade'});
});

router.get('/filter-arrays', function(req, res){
    res.render('filter-arrays');
});

router.get('/custom-filter', function(req, res){
    res.render('custom-filter');
});

router.get('/simple-routing', function(req, res){
    res.render('Chapter 10/simple-routing')
});
module.exports = router;
