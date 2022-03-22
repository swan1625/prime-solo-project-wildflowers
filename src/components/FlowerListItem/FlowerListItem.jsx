import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
        <div className='flowerItemContainer' key={item.id} onClick={() => handleClick(item)} >
            <h3>{item.common_name}</h3>
            <img src ={item.image_path} />
        </div>
    )
}

export default flowerListItem;