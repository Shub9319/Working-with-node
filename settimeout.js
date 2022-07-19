console.log('Hiiii__!!!!');
const oneFun = ()=>{
    console.log("hello after 4 sec");
}
const timer = setTimeout(oneFun, 6000);

console.log('Hiiii');
clearTimeout(timer);