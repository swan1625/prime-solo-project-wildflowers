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
  const commonTotal = useSelector(store => store.commonTotal)
  const comoTotal = useSelector(store => store.comoTotals)
 


  let total = Object.keys(totalFlowers).length;
  let specialConcern = Object.keys(scTotal).length;
  let common = Object.keys(commonTotal).length;
  let como = Object.keys(comoTotal).length;

  console.log('sc total is,', scTotal);

  useEffect(() => {
    dispatch({ type: 'FETCH_FLOWERS' });
    dispatch({ type: 'FETCH_USER_FLOWERS' });
    dispatch({ type: 'FETCH_SC_FLOWERS' });
    dispatch({ type: 'FETCH_COMMON_FLOWERS' });
    dispatch({ type: 'FETCH_COMO_FLOWERS' })
}, []);

  return (
    <div className="container" style={{ borderStyle: 'dashed', borderColor: '#a5c2af', marginTop: '35px', backgroundColor: '#e2d3e8',}}>
      <h2>Hello {user.username}!</h2>
      <p> You've found {total}/50 flowers </p>
    <p> {common}/25 Common Flowers (Common) </p>
      <p> {specialConcern}/5 Special Concern Flowers (Uncommon) </p>
      <p> 1/5 Threatened Flowers (Rare) </p>
      <p> 0/5 Endangered Flowers (Epic) </p>
      <p> {como}/10 Como Conservatory Flowers (Bonus) </p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
