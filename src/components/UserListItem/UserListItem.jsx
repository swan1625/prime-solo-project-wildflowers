import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './UserListItem.css'

import { Button, FormControlLabel, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';


const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#2c0628',
    color: 'white'
  }));

function userFlowerListItem({ item }) {
  // const selectedFlower = useSelector(store => store.getName)
  const userSelectedFlower = useSelector(store => store.userSelectedFlower);
  
  const dispatch = useDispatch();
  const history = useHistory();

  // alowing us to get information to look at a single user flower
  function handleClick(item) {
    console.log('in handle click', item);
    // console.log();
    dispatch({ type: 'SET_USER_SELECTED_FLOWER', payload: item })
    console.log('flower ID is ', item.flower_id);
    history.push(`/detailsboquet/${item.id}`);
  }

  useEffect(() => {
    // on page load, fetch these things
    // dispatch({ type: 'SET_SELECTED_NAME', payload: userSelectedFlower.flower_id})

}, []);


console.log('getname  is', userSelectedFlower.flower_id);
  return (
    <div className="card" style={{ borderStyle: 'dashed', borderColor: '#a5c2af', marginBottom: '14px', backgroundColor: '#e2d3e8'}} >
    <div class="imagediv" key={item}  onClick={() => handleClick(item)}>
      <img width="100%"  src={item.uploaded_image} />
      <div class="card-txt">
            <p className='city'>{item.nearest_city}</p>
        </div>
        <ColorButton  sx={{ml:0, mb:2}}> Plant Details </ColorButton>
      </div>
    </div>

  )

}

export default userFlowerListItem;