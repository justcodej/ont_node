const express = require('express'),
    router = express.Router(),
    sql = require('../module/mysql'),
    crypto = require('crypto');

router.get('/',(req,res)=>{
    res.render("admin/register",{page: 'register'});
});
router.post('/',(req,res)=>{
    const username = req.body.username,
        password = req.body.password,
        md5 = crypto.createHash('md5'),
        newPass = md5.update(password).digest('hex');
    sql('SELECT * FROM user WHERE username = ?',[username],(err,data)=> {
        if(err){
            res.render('register_err_code:101');
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