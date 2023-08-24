var express = require('express')
var cors = require('cors')
var app = express()
const port = process.env.PORT || 5000;

const chefs = require("./data/chef_data.json")
const blogs = require("./data/blog.json")
 
app.use(cors())
 

app.get('/',(req,res)=>{
  res.send(`This is API Home
  /chefs 
  /blogs`)
})


//Chef data 
app.get('/chefs',(req,res)=>{
  res.send(chefs) 
})


app.get('/chefs/:id',(req,res)=>{
  const id = req.params.id;
  console.log(id )
  const thisChef = chefs.find(n => n.id === id);
  res.send(thisChef)
})


//blog data
app.get('/blogs',(req,res)=>{
  res.send(blogs)
})

app.listen(port, ()=>{
  console.log(`server is running at port ${port}`)
})