import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './FlowerListItem.css'

import { Box } from '@mui/system';

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
        <div style={{ borderStyle: 'dashed', marginBottom: '14px', backgroundColor: '#F2B7C6'}} className='flowerItemContainer' key={item.id} onClick={() => handleClick(item)} >
            <h3>{item.common_name}</h3>
            <div class='flowerimgdiv'>
            <img src ={item.image_path} />
            </div>
        </div>
    )
}

export default flowerListItem;