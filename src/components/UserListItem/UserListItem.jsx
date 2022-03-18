import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './UserListItem.css'

function userFlowerListItem({ item }) {
  const selectedFlower = useSelector(store => store.getName)
  
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick(item) {
    console.log('in handle click');
    // console.log();
    dispatch({ type: 'SET_USER_SELECTED_FLOWER', payload: item })
    console.log('flower ID is ', item.id);
    history.push(`/detailsboquet/${item.id}`);
  }

  useEffect(() => {
    // on page load, fetch these things
    dispatch({ type: 'SET_SELECTED_NAME', payload: item.id})

}, []);


console.log('selected flower is', selectedFlower);
  return (
    
    <div class="imagediv" key={item.id} onClick={() => handleClick(item)}>
      <h3>{item.notes}</h3>
      {/* <img src ={item.image_path} /> */}
    
      <img src={item.uploaded_image} />
      <p></p>
  
    </div>

  )

}

export default userFlowerListItem;