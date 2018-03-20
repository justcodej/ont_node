const express = require('express'),
    router = express.Router(),
    sql = require('../module/mysql');

router.get('/',(req,res)=>{
    req.session.admin?res.render("admin/index"):res.redirect('/');
});



module.exports = router;