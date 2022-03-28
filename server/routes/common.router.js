const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/', (req, res) => {
    const query = `SELECT * FROM "userFlowerList" 
    JOIN "flowerList" ON "userFlowerList"."flower_id" = "flowerList"."id"
    WHERE "flowerList"."type" = 'Common';`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all SC flowers', err);
        res.sendStatus(500)
      })
      
  });




module.exports = router;