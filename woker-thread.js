const { Worker, isMainThread, parentPort , workerData} = require('worker_threads');

if(isMainThread){

    console.log('Starting main Thread');
    const worker = new Worker(__filename,{workerData:{
        variable:'HI I AM FROM WORKER DATA',
        value:3000
    }});

    worker.postMessage('Recieved message from  main')

    worker.on('message',(msg)=>{
        console.log(msg);
    })
    console.log('Still in Main Thread');
}
else{

    console.log("I am in Worker Thread");

    console.log(workerData.variable, workerData.value);


    parentPort.on('message',(msg)=>{  // name 'message is same'
        console.log(msg);
    });

    parentPort.postMessage('recieved message from worker')
    console.log('I am in last worker');

}

