import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function userFlowerListItem({ item }) {


  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick(item) {
    console.log('in handle click');
    // console.log();
    dispatch({ type: 'SET_USER_SELECTED_FLOWER', payload: item })
    console.log('flower ID is ', item.id);
    history.push(`/detailsboquet/${item.id}`);
  }

  return (

    <div key={item.id} onClick={() => handleClick(item)}>
      <h3>{item.notes}</h3>
      {/* <img src ={item.image_path} /> */}
      <img src={item.uploaded_image} />
    </div>
  )

}

export default userFlowerListItem;