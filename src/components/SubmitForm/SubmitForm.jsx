// import req from 'express/lib/request';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import './SubmitForm.css'


// --------Material UI Imports----------
import { Button, FormControlLabel, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[100]),
  backgroundColor: '#2c0628',
  color: 'white'

}));




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
 
      <Box sx={{
        m: "auto",
        mt: 6,
        width: 340,
        height: 390,
        backgroundColor: '#e2d3e8',
        borderStyle: 'dashed',
        borderColor: '#a5c2af'
      }}
      >
        <h3> Submit Your Flower </h3>
             {/* <Typography sx={{textAlign: 'center',}}> Submit Your Flower </Typography> */}
        <form sx={{alignItems: 'center'}} className="my-form" onSubmit={handleSubmit} encType="multipart/form-data" >
          <TextField
            sx={{ background: '#e3e3e3', mt: -1, ml:2.4, width: 300 }}
            type="text"
            placeholder="Nearest City"
            onChange={(event) => setCity(event.target.value)}
            fullWidth
          />
          <TextField
            sx={{ background: '#e3e3e3', mt: 1.2, ml:2.4, width: 300,
            height: 125 }}
            multiline={true}
            type="text"
            rows={4}
            placeholder="Notes"
            onChange={(event) => setNotes(event.target.value)}
            fullWidth
          />
          <Input
            sx={{ background: '#e3e3e3', mt: 1.2, ml:2.1}}
            type='file'
            name='file'
            placeholder="image"
            onChange={(event) => setImagePath(event.target.files[0])}
          />
          <ColorButton sx={{ mt: 1.2, ml: 11 }} variant='contained' type="submit" className="my-form">Add to Bouquet!</ColorButton>
        </form>

      </Box>
    </>
  )

}

export default submitForm;