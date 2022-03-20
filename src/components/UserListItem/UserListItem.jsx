import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './UserListItem.css'

function userFlowerListItem({ item }) {
  // const selectedFlower = useSelector(store => store.getName)
  const userSelectedFlower = useSelector(store => store.userSelectedFlower);
  
  const dispatch = useDispatch();
  const history = useHistory();

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
    
    <div class="imagediv" key={item}  onClick={() => handleClick(item)}>
      <h3>{item.notes}</h3>
      {/* <img src ={item.image_path} /> */}
    
      <img src={item.uploaded_image} />
      {/* <p>{selectedFlower}</p> */}
  
    </div>

  )

}

export default userFlowerListItem;