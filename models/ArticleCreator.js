const mongoose=require('mongoose');

const Schema = mongoose.Schema

const articleCreator = new Schema({
  name:{type:String,required:true},
  role:{type:String,required:true},
  createdAt:{type:Date, default:Date.now(),
  createdBy:{type:String,required:true}
},{timestamps:true})

const Article = mongoose.model('Article',articleCreator);

module.exports=Article;
