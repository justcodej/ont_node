const express = require('express'),
    router = express.Router(),
    sql = require('../module/mysql');

router.get('/',(req,res)=>{
    req.session.admin?res.render("admin/index",{page: 'main'}):res.redirect('/');
});
router.get('/users',(req,res)=>{
    res.render('admin/tables');
});
router.get('/article',(req,res)=>{
    res.render('admin/article');
});


module.exports = router;