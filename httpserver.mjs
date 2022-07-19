import { createServer } from 'http';  //.mjs is used to use ES6 syntax
const server= createServer((req,res)=>{
    res.write('Hello World');
    res.end();
});

server.listen(4040,()=>{
    console.log("SERVER IS RUNNING");
})