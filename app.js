 const express=require("express");

 var app=express();
 var items=[];//Check the variations if was an array
 app.set("view engine", "ejs");
 app.use(express.urlencoded({extended:true}))
app.get("/",function(req,res){
var today=new Date();
var options={
weekday:"long",
day:"numeric",
month:"long"
}
var date=today.toLocaleDateString("en-US",options)
res.render("list",{kindOfDay:date,newListItems:items})
})
app.post("/",function(req,res){
   var item=req.body.newItem;
    items.push(item)
    res.redirect("/")
})
    
app.listen(3000,function(){
    console.log("Server started on port 3000");
})
