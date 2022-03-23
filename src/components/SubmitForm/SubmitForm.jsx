// import req from 'express/lib/request';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';


// --------Material UI Imports----------
import { Button, FormControlLabel, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';






function submitForm() {

  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [flowerid, setFlowerid] = useState('');

  const history = useHistory();



  const selectedFlower = useSelector(store => store.selectedFlower);
  let flowerIds = selectedFlower.id;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(imagePath.name);
    let flowerid = selectedFlower.id;
    console.log('flower id is handle sub', flowerid);

    dispatch({ type: 'ADD_USER_FLOWER', payload: { imagePath, notes, city, flowerid } });
    history.push(`/submitconfirm`);

  }

  const setFlowerId = (e) => {
    setFlowerid(selectedFlower.id)
  }
  useEffect(() => {
    // on page load run setFlowerID 
    setFlowerid();
  }, []);

  console.log('city is', city);
  console.log('flowerid is ', selectedFlower.id);
  return (
    <>
<Box> 
<form className="my-form" onSubmit={handleSubmit} encType="multipart/form-data" >
        <Input
          type="text"
          placeholder="Nearest City"
          onChange={(event) => setCity(event.target.value)}
        />
        <Input
          type="text"
          placeholder="Notes"
          onChange={(event) => setNotes(event.target.value)}
        />
        <Input
          type='file'
          name='file'
          placeholder="image"
          onChange={(event) => setImagePath(event.target.files[0])}
        />
        <Button type="submit" className="my-form">Add to Bouquet!</Button>
      </form>






















      {/* <form onSubmit={handleSubmit} encType="multipart/form-data" >
        <input
          type="text"
          placeholder="Nearest City"
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          type="text"
          placeholder="Notes"
          onChange={(event) => setNotes(event.target.value)}
        />
        <input
          type='file'
          name='file'
          placeholder="image"
          onChange={(event) => setImagePath(event.target.files[0])}
        />
        <button type="submit">Add to Bouquet!</button>
      </form> */}
      </Box>
    </>
  )

}

export default submitForm;