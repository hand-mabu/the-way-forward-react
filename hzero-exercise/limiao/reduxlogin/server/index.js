import express from 'express';
import bodyParser from 'body-parser';
import login from './routes/login';
let app=express();

app.use(bodyParser.json());

app.use('/api/login',login);
app.get('/',(req,res)=>{
    res.send('hello server');
});
app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(6060,()=>console.log('Running on localhost:6060'));