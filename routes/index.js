const { Router } = require("express");
const User = require("../modell/weblog");


const router = new Router();

router.get("/",(req, res) => {
    res.render("index", { 
        pageTitle: "وبلاگ" ,
        fullname : req.user.fullname
        });
});

module.exports = router;
