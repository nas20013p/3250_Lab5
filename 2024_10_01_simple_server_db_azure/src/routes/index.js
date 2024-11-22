const express = require('express');
const db_insert = require('../db/insert');
const db_select = require('../db/select');
const pool = require('../db/connection'); // Database connection
const router = express.Router();


function no_cors_setup(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
}

/*
 *
 * 
 * curl "http://localhost:3001/insert?id=2&name=Phil&address=Stamford_CT"
 *
*/
router.get('/insert', async (req, res, next) => {
    no_cors_setup(res);
    try {
        const results = await db_insert.insertData(await pool, req.query);
        console.log(results);
        res.json(results);
    } catch (e) {
        console.error('Error in /insert route:', e.message);
        res.sendStatus(500);
    }
});

/*
 * Make this SELECT interesting by passing in values to query
 */

 /*
  * 
  * curl http://localhost:3001/select?value=my_name
 */

router.get('/select', async (req, res, next) => {
    no_cors_setup(res);
    try {
        const data = await db_select.selectData(await pool);
        res.status(200).send(JSON.stringify(data, null, 2)); 
    } catch (e) {
        console.error('Error in /select route:', e.message);
        res.sendStatus(500);
    }
});


module.exports = router;

