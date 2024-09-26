const express=require('express')
const app=express();
require("dotenv").config();

const postRouter=require('./mobile/routes/postRouters.js')
app.use(express.json())

app.use('/api/mobile/posts',postRouter)



app.listen(3000,()=>{
    console.log("app is listening")
})