import express from 'express';
import cors from 'cors';
const app=express();
app.use(cors());
app.listen(5000,()=>{
    console.log("App is running on the Prt 5000")
})