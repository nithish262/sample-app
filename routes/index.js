var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anjac',name:'Nithish kumar',rollno:'21pa59',class:'II-mca' });
  
});

router.get("/register", (req, res) => {
    res.render("register")
})
router.get("/login", (req, res) => {
  res.render("login")
})
module.exports = router;
