const express = require('express');
const router = express.Router();
const os = require('os');
router.get('/', (req,res)=>{
 res.status(200).send(
    `
    <center>
    <h1>Hello I'm Updated</h1>
    <br>
    OS:<h2> ${os.hostname}<h2>
    </center>
`
 );
});




module.exports = router;