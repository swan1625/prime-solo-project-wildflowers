const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/:id', (req, res) => { 
    const id = req.params.id
    console.log('get common name', id);
  // select the genres from a selected movie ID 
    const query = `SELECT "flowerList"."common_name" FROM "flowerList"
    JOIN "userFlowerList" ON "userFlowerList"."flower_id" = "flowerList"."id"
    WHERE "flowerList"."id" = $1
    LIMIT 1`;

  
    pool.query(query, [id] )
    .then( result => {
      res.send(result.rows);
      console.log('res send, result.rows is', result.rows)
      
    }).catch(err => {
      console.log('ERROR: Get genre details severside', err);
      res.sendStatus(500)
    })
  });


module.exports = router;