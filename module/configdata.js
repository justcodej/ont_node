const app = require('../app'),
    sql = require("./mysql");

app.use(function (req,res,next) {
    if(req.cookies['login']){
        res.locals.login = req.cookies['login']['username'];
        if ( req.session.admin ){
            res.locals.admin = req.session.admin;
            next();
        }else {
            sql("select * from user where username = ?",[req.cookies.login.username],(err,data)=>{
                req.session.admin = Number(data[0].admin);
                res.locals.admin = req.session.admin;
                next();
            });
        }
    }else{
        next();
    }
});