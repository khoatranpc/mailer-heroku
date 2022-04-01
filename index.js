const express = require('express');
const app = express();
const port = 5000;
const mailRouter =  require('./routes/mailer.routes.js');
const cors =require('cors');
const main = ()=>{
    
    app.use(cors());
    app.use(express.json());
    
    app.use('/api/verify',mailRouter);
    app.get('/',(req,res)=>{
        res.send({
            Message:'Hello khoa dep trai'
        })
    })
    app.listen(process.env.PORT||port,()=>{
        console.log(`This server is running on port ${port}`);
    })
}
main();