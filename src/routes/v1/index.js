const express = require('express')
const router = express.Router();
const  fetch = require ('node-fetch')
globalThis.fetch = fetch.fetch
url = "https://v2.jokeapi.dev/joke/Any?type=single"


const randomJoke = async(req, res)=>{
    try {
           const resp = await fetch(url).then((data=> data.json()));
           console.log(resp);
           const val = resp.joke;
            return res.status(200).json({
                success : true , 
                err : {},
                message : 'joke fetched successfully',
                data : val
            })       
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data : {},
            success: false ,
            err:error,
            message : error.message
        })
    }
}
router.get('/jokes' ,randomJoke);
module.exports =router