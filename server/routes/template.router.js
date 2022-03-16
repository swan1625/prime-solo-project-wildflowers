const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinaryUpload = require('../modules/cloudinary-config');
/**
 * GET route template
 */
 router.get('/', (req, res) => {
  console.log('/flowers GET route');
  console.log('is authenticated?', req.isAuthenticated());
  console.log('user', req.user);
  let queryText = `SELECT * FROM "flowerList"`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  });
}); 
/**
 * POST route template
 */
 router.post('/', cloudinaryUpload.single("image"), async (req, res) => {
  // endpoint functionality
  // if (req.isAuthenticated()) {
    console.log('niceeee req.file:', req.file.path)
    console.log('server post description', req.body.notes);
    console.log('nearest city is', req.body.city);
    console.log('username', req.user.id);
    console.log('flower id is ', req.body.flowerID);


    let queryText = `INSERT INTO "userFlowerList" ( "notes", "uploaded_image", "user_id", "flower_id", "nearest_city") 
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText,  [ req.body.notes, req.file.path, req.user.id, req.body.flowerID, req.body.city])
      .then(dbRes => res.sendStatus(201))
      .catch(err => { 
        console.log('erroris', err);
        res.sendStatus(500);
      })

  // } else {
  //   res.sendStatus(403);
  // }
});

module.exports = router;
