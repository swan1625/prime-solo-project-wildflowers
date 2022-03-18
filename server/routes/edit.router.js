const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.put('/:id', (req, res) => {
    // Update this single student
    const idToUpdate = req.params.id;
    const sqlText = `UPDATE "userFlowerList" SET notes = $1 WHERE id = $2`;
    pool.query(sqlText, [req.body.notes, idToUpdate])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


module.exports = router; 