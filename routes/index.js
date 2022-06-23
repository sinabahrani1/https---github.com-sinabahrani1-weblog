const { Router } = require("express");
const User = require("../modell/weblog");


const router = new Router();

router.get("/",(req, res) => {
    res.render("index", { 
        pageTitle: "وبلاگ" ,
        });
});

module.exports = router;
