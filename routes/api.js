var express = require('express'),
    router = express.Router();

var items = [
    {label: 'label1', author: 'jason'},
    {label: 'label2', author: 'john'},
    {label: 'label3', author: 'kim'},
    {label: 'label4', author: 'ton'}
];

router.get('/note', function(req, res){
    res.send(items);
});

router.post('/note', function(req, res){
    var item = req.body || {label: 'label5', author: 'tony'};
    items.push(item);
    res.send(items);
});

module.exports = router;