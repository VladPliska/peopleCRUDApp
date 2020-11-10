const express = require('express');
const router = express.Router();


module.exports = (db) => {
    
    router.get('/',()=>{
        console.log('tesst');
    })
    
    return router;
}