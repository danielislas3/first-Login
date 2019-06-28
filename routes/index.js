const express = require('express');
const router  = express.Router();

function checksession (req,res,nex){
  if(req.session.currentUser){
    nex()
  }else{
    res.redirect('/auth/login')
  }
}
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/secret',checksession,(req,res)=>{
  res.render('secret')
})
module.exports = router;
