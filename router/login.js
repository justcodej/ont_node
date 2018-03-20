const express = require('express'),
    router = express.Router(),
    sql = require('../module/mysql'),
    crypto = require('crypto');

router.get('/',(req,res)=>{
    res.render("admin/sign-in");
});
router.post('/',(req,res)=>{
    const username = req.body.username,
        password = req.body.password,
        md5 = crypto.createHash('md5'),
        newPass = md5.update(password).digest('hex');
    sql('SELECT * FROM user WHERE username = ?',[username],(err,data)=> {
        if(err){
            res.render('login_err_code:101');
            return;
        }
        if(data.length == 0){
            res.json({
                result: 0,
                info: '用户名不存在'
            })
        }else if(data[0]['password'] == newPass) {
            res.cookie('login',{username:username},{maxAge: 1000*60*60*24});
            req.session.admin = Number(data[0].admin);
            res.json({
                result: 1,
                info: '密码正确'
            });
        }else{
            res.json({
                result: 0,
                info: '密码错误'
            })
        }
    });
});


module.exports = router;