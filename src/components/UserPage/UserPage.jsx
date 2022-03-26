import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const totalFlowers = useSelector(store => store.userImages);


  let total = Object.keys(totalFlowers).length;


  console.log('total is,', total);

  useEffect(() => {
    dispatch({ type: 'FETCH_FLOWERS' });
    dispatch({ type: 'FETCH_USER_FLOWERS' });
    
}, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p> You've found {total}/50 flowers </p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
