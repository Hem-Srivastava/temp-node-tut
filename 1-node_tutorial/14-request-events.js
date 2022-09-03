const http=require('http');


// const server=http.createServer((req,res)=>{
//     res.end('Welcome!')
// })

// using event emitter API
const server=http.createServer();
// emits request event
// subscribe to it/respond to it/listen to it

server.on('requests',(req,res)=>{
    res.end("Welcome!");
})
server.listen(5000);