import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SubmitConfirmation.css'


import { Button, FormControlLabel, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#2c0628',
    color: 'white'
  }));

function submitConfirm() {
    const selectedFlower = useSelector(store => store.selectedFlower);

    const history = useHistory();
    function handleListClick() {
        console.log('clicking back to list');
        // move back to movie list on click
        history.push('/flowerlist')
    }

    function handleBouquetClick() {
        console.log('clicking back to list');
        // move back to movie list on click
        history.push('/userlist')
    }

    console.log('selected floweradnrea', selectedFlower);
    return (

        <div style={{ borderStyle: 'dashed', borderColor: '#a5c2af', marginTop: '24px', paddingBottom:'20px', backgroundColor: '#e2d3e8', textAlign: 'center', }}>
       <p className='success'> <b>Upload Successful! </b></p>  
        <img className='andreaFlower' src="https://res.cloudinary.com/dubyogkaz/image/upload/v1648328856/wildflowers/wvam0wnejl4zkuvsq4zw.png"></img>
       <p className='picked'> You Pic(k)ed a <b> {selectedFlower.common_name} </b> </p> <br></br>
       
                <p><b>Check out your upload(s) in the Digital Bouquet</b></p>
        <ColorButton onClick={handleBouquetClick}> Digital Bouquet </ColorButton><br></br>
        <p><b>Or</b></p>
        <ColorButton onClick={handleListClick}> Back to Flower Index </ColorButton>
        </div>
    )
}

export default submitConfirm; 