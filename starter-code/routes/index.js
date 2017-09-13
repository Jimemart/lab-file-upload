const express = require('express');
const router  = express.Router();
const Post = require('../models/Post')
/* GET home page. */
router.get('/', (req, res, next) => {
  Post.find()
      .then((posts)=>{
        res.render('index', { title: 'Express - Generated with IronGenerator', posts});
      })
      .catch((err)=>console.log(err))

});

module.exports = router;
