import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const totalFlowers = useSelector(store => store.userImages);
  const scTotal = useSelector(store => store.scTotals);
 


  let total = Object.keys(totalFlowers).length;
  let specialConcern = Object.keys(scTotal).length;

  console.log('sc total is,', scTotal);

  useEffect(() => {
    dispatch({ type: 'FETCH_FLOWERS' });
    dispatch({ type: 'FETCH_USER_FLOWERS' });
    dispatch({ type: 'FETCH_SC_FLOWERS' });
}, []);

  return (
    <div className="container">
      <h2>Hello {user.username}!</h2>
      <p> You've found {total}/50 flowers </p>
    <p> common boys/25 (Common) </p>
      <p> {specialConcern}/5 Special Concern Flowers (Uncommon) </p>
      <p> /5 Threatened Flowers (Rare) </p>
      <p> /5 Endangered Flowers (Epic) </p>
      <p> /10 Como Conservatory Flowers (Bonus) </p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
