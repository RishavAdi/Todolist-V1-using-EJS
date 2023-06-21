 const express=require("express");
const date=require(__dirname+"/date.js");
 var app=express();
//  console.log(module.exports);
 const items=["Buy food","cook food","Eat food"];
 const workItems=[];
 app.set("view engine", "ejs");
 app.use(express.urlencoded({extended:true}))
 app.use(express.static("public"))
app.get("/",function(req,res){
    const day=date.getDay();
res.render("list",{ListTitle:day,newListItems:items})
})
app.post("/",function(req,res){
  const item=req.body.newItem;
   const list=req.body.list;
   console.log(item);
   console.log(list);
   if(list[0]=="/work"){
    workItems.push(item);
    res.redirect("/work");
   }
   else{
    items.push(item)
    res.redirect("/")
   }
    
})
app.get("/work",function(req,res){
    res.render("list",{ListTitle:"Work List",newListItems:workItems.slice()})
})
app.get("/about",function(req,res){
    res.render("about")
})
// app.post("/work",function(req,res){
//     let item=req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })
    
app.listen(3000,function(){
    console.log("Server started on port 3000");
})
