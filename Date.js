// module.exports="Hello world";
// module.exports.getDate=getDate;
// module.exports.getDay=getDay;
exports.getDate=function(){
    const today=new Date();
const options={
weekday:"long",
day:"numeric",
month:"long"
}
let day=today.toLocaleDateString("en-US",options)
return day;
}
exports.getDay=function(){
   const today=new Date();
const options={
weekday:"long"
}
let day=today.toLocaleDateString("en-US",options)
return day;
}
console.log(module.exports);
