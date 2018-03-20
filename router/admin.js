const express = require('express'),
    router = express.Router(),
    sql = require('../module/mysql');

router.get('/',(req,res)=>{
    req.session.admin?res.render("admin/index",{page: 'main'}):res.redirect('/');
});
router.get('/users',(req,res)=>{
    sql('SELECT * FROM user',(err,data)=>{
        if (err){
            res.render('user_data_err_code:103');
            return;
        }
        if(data){
            res.render('admin/tables',{result: 1,data:data});
        }else {
            res.render('admin/tables',{result: 0,data: '数据查询失败:201'});
        }
    });
});
router.get('/article',(req,res)=>{
    res.render('admin/article_en');
});
router.get('/article_en',(req,res)=>{
    res.render('admin/article_en');
});
router.get('/article_cn',(req,res)=>{
    res.render('admin/article_cn');
});
router.get('/media',(req,res)=>{
    res.render('admin/media');
});


module.exports = router;