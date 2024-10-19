import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("server is ready");
})

app.get('/api/jokes',(req,res)=>{
    const JOKES = [
        {
            id:"1",
            title: "joke 1",
            content: "this is joke 1"

        },
        {
            id:"2",
            title: "joke 2",
            content: "this is joke 2"
        },
        {
            id:"3",
            title: "joke 3",
            content: "this is joke 3"
        }
    ]
    res.send(JOKES);
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`app can be accesses from http://localhost:${PORT}`)
})