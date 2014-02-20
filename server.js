var express = require('express'),
	swig    = require('swig'),
	cons    = require('consolidate'),
	fs      = require('fs'),
	uuid    = require('node-uuid');

var app      = express(),
	server   = require('http').createServer(app),
	io       = require('socket.io').listen(server);


swig.init({
	cache : false
});

// View engine
app.engine('.html', cons.swig);
app.set('view engine', 'html');
app.set('views', './app/views');

// Add POST, PUT, DELETE methods to the app
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());

// Static files
app.use( express.static('./public') );

var home = function (req, res) {
	res.render('index',{
	});
};

app.get('/', home);

server.listen(3000);