var express = require('express');
var app = express();
var get_ip = require('ipware')().get_ip;

// 对网站首页的访问返回 "Hello World!" 字样
app.get('/ip', function (req, res) {
    var ip=get_ip(req);
    res.send(ip)
});

// 网站首页接受 POST 请求;
app.post('/', function (req, res) {
    res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

