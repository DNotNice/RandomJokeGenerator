const express = require('express');
const app = express();
const router = express.Router();
const v1 = require('./routes/index')
const {PORT}  = require('./config/serverConfig')
app.use('/api', v1)
app.listen(PORT , ()=>{
    console.log(`server started on PORT ${PORT}`)
})

