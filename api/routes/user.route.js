import express from 'express';

const router = express.Router();

router.get('/test',(req,res) =>{
    res.json("Hello world")
})

export default router;
