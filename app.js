const http = require('http'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

module.exports = app;
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('ont')); // 秘钥
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'aF,.j)wBhq+E9n#aHHZ91Ba!VaoMbC', // 秘钥
    cookie: { maxAge: 60 * 1000 }
}));
require('./module/configdata');
app.use('/',require(__dirname+'/router/index'));

http.createServer(app).listen(3000);