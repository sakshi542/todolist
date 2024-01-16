const express= require('express')
const app=express();
const bodyParser=require('body-parser')
const config=require(__dirname +'/config.js')
const port=4000
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'))
let items=[];
let workItems=[];

app.get('/',(req,res)=>{
    let day=config();
    res.render("list",{listTitle:day,listItems:items});
})
app.post('/',(req,res)=>{
    let item=req.body.newItem
    let button=req.body.buttonlist
    
    if(button==='Work'){
        workItems.push(item)
        res.redirect('/work')
    }
    else{
        items.push(item)
        res.redirect('/')
    }
})

app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work",listItems:workItems})
})


app.listen(port,function(){
    console.log("running successfully at 3000");
})