const express =  require('express');
const server=express();

server.set('view engine','ejs')

server.get('/',(req,res)=>{
    res.render('index');
    // res.send('Hello Express');
})

server.get('/about',(req,res)=>{
    // res.send('About..');
    res.render('about')
})

server.listen(3030,()=>{
    console.log('Express server is running');
})