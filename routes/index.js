const express = require('express');
const router = express.Router();


module.exports = (db) => {
    const mainController = require('../controller/mainController')(db);
    
    router.get('/',mainController.redirectUsers);   

    return router;
}