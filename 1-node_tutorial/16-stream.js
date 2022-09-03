const {createReadStream}=require('fs');

const stream= createReadStream('../content/big.txt',{
    highWaterMark : 90000,
    // encoding: 'utf8'
})

// default -64kb (Size of buffer)
// last buffer - remainder
// highWaterMark - control size


stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>{
    console.log(err);
})