import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './FlowerListItem.css'

import { Button, FormControlLabel, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';


const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#2c0628',
    color: 'white'
  }));

function flowerListItem({item}) {



    const dispatch = useDispatch();
    const history = useHistory();
    function handleClick(item) {
        //sending information to be displayed in details page  
        dispatch({ type: 'SET_SELECTED_FLOWER', payload: item })
        console.log('flower ID is ', item.id);
        history.push(`/details/${item.id}`);
      }
  
    return (
        <div style={{ borderStyle: 'dashed', borderColor: '#a5c2af', marginBottom: '14px', backgroundColor: '#e2d3e8'}} className='flowerItemContainer' key={item.id} onClick={() => handleClick(item)} >
            <h3>{item.common_name}</h3>
            <div class='flowerimgdiv'>
            <img src ={item.image_path} />
            </div>
            <ColorButton  sx={{ml:15.5, mb:2}}> Plant Details </ColorButton>
        </div>
    )
}

export default flowerListItem;