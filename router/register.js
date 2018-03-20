const express = require('express'),
    router = express.Router(),
    sql = require('../module/mysql'),
    crypto = require('crypto');

router.get('/',(req,res)=>{
    req.session.admin?res.render("admin/register"):res.redirect('/');
});
router.post('/',(req,res)=>{
    const username = req.body['username'],
        password = req.body['password'],
        md5 = crypto.createHash('md5'),
        newPass = md5.update(password).digest('hex');
    sql('select * from user where username = ?',[username],(err,data)=>{
        if(err){
            res.render("username_err");
            return;
        }
        if(data == undefined || data.length == 0){
            sql("INSERT INTO user (id, username, password, admin) VALUES (0,?,?,1)",[username,newPass],(err,data)=>{
                if(err){
                    res.render('register_err');
                    return;
                }else{
                    res.json({
                        result: 1,
                        info: '注册成功'
                    });
                }
            })
        }else {
            res.json({
                result: 0,
                info: '用户名已存在',
                data: data
            })
        }
    });
});


module.exports = router;