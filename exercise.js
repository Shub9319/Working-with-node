// process.env.VAR1='shubAH'
// process.env.PORT=9090

// console.log( process.env.PORT);
// process.env.PORT=50000
// console.log( process.stdout);
//------------------------------------------------------------------------------------------

// function promise2(){
//     console.log('promise 2 called');
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // resolve('resolve 2')
//             // reject(new Error('error.2'))
//             reject('rejec/t 2')
//         },1000)
//     })
// } function promise1(){
//     console.log('promise 1 called');
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Resolved 1')
//             // reject(new Error('error.2'))
//         },2000)
//     })
// }


// Promise.all([promise1(),promise2()]) 
// .then(values=>console.log(values))
// .catch(err=>console.log(err))

// async function Main(){
//     let call1 = await promise1();
//     console.log(call1);
//     let call2 = await promise2();
//     console.log(call2);
// }
// Main();
//--------------------------------------------------------------------------------------------
// function promise1(){
//     return  Promise.reject("nbvc");
// }

// function promise2(){
//     return  Promise.resolve("lmknjb");
// }

// Promise.all([promise1(),promise2()])
// .then((er)=>console.log(er))
// .catch((error)=>console.log(error))

//---------------------------------------------------------------------------------------
// function ji(){
//     console.log(arguments);
// }

// ji(1,2,3,4)

// console.log(arguments);
//----------------------------------------------------------------------------------------
// global.a=90;   ///use global declaration
//--------------------------------------------------------------------------------------
