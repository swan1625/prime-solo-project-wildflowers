const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.delete('/:id', (req, res) => {
    // endpoint functionality
    let reqId = req.params.id;
    if (req.isAuthenticated()) {
      console.log('/delete DELETE route');
      console.log('is authenticated?', req.isAuthenticated());
      console.log('user', req.user);
      console.log('reqId is', reqId);
      let queryText = 'DELETE FROM "userFlowerList" WHERE id = $1;';
      pool.query(queryText, [reqId])
      .then(result => res.sendStatus(201))
        .catch(err => res.sendStatus(500));
    } else {
      res.sendStatus(403);
    }
  });

  module.exports = router; 