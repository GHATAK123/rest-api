const express=require('express');
const app=express();
const port = process.env.PORT || 3000;
app.get("/",(req,res,next)=>{
  res.end("<h1>Server is Running!!!</h1>")
})



app.listen(port,()=>{
  console.log(`Server is running at ${port}`);
})