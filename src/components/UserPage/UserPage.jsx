import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './UserPage.css'
import { textAlign } from '@mui/system';
import { useHistory } from 'react-router-dom';

// --------Material UI Imports----------
import { Button, FormControlLabel, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({

    backgroundColor: '#2c0628',
    color: 'white'
}));

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const totalFlowers = useSelector(store => store.userImages);
  const scTotal = useSelector(store => store.scTotals);
  const commonTotal = useSelector(store => store.commonTotal)
  const comoTotal = useSelector(store => store.comoTotals)

  const history = useHistory();


  function handleUserListClick() {
    console.log('match button');
    history.push('/userlist')
}


    function handleClick() {
        console.log('clicking back to list');
        // move back to movie list on click
        history.push('/flowerlist')
    }

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
    <div className="container" style={{ borderStyle: 'dashed', borderColor: '#a5c2af', marginTop: '35px', backgroundColor: '#e2d3e8', }}>
      <div style={{ borderStyle: 'dashed', borderColor: '#a5c2af', textAlign: 'center' }}>
        <p style={{ textAlign: 'center', fontSize: '29px' }}>Welcome Back, {user.username}!  </p>
        <ColorButton onClick={handleClick}> Go to Flower Index </ColorButton><br></br>
        <ColorButton sx={{mt:1.5, mb:1.5}} onClick={handleUserListClick}> Go to Digital Bouquet </ColorButton>
      </div>
      <p className='totalflowers'> <b> You've found {total}/50 flowers </b> </p>
      <div style={{ textAlign: 'center' }}>
        {/* /// need to finish routes below // */}
      <p >  <b> Subcategories: </b>   </p>
      <p> <b>{common}/25 </b>Common Flowers (Common) </p>
      <p> <b>{specialConcern}/5 </b> Special Concern Flowers (Uncommon) </p>
      <p><b> 1/5 </b>Threatened Flowers (Rare) </p>
      <p><b> 0/5</b> Endangered Flowers (Epic) </p>
      <p> <b>{como}/10 </b>Como Conservatory Flowers (Bonus) </p>
      </div>
      <div style={{ textAlign: 'center'}}> 
      <ColorButton onClick={() => dispatch({ type: 'LOGOUT' })}> Log Out </ColorButton><br></br>
      
      </div> 
      </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
