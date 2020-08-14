const router = require('express').Router()
const Article = require('../models/article')

router.post('/',(req,res)=>{
  
  const article = new Article({
    title:req.body.title,
    body:req.body.body,
    author:req.body.author
  })
  article.save((err,document)=>{
    if(err)
      throw err
      res.json(document)
  })



})

module.exports=router;