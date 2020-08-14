const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port = process.env.PORT || 3000;
app.get("/",(req,res,next)=>{
  res.end("<h1>Server is Running!!!</h1>")
})
// database connection 
const url='mongodb+srv://root:toor@pizza.uja22.mongodb.net/pizza?retryWrites=true&w=majority';
mongoose.connect(url,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:true
})
const connection = mongoose.connection
connection.once('open',()=>{
  console.log('Database connected');
}).catch(err => {
  console.log('Database error');

})
app.use(express.json())
//Routes
const articlesRoutes=require('./routes/articles')
app.use('/api/articles',articlesRoutes);


app.listen(port,()=>{
  console.log(`Server is running at ${port}`);
})