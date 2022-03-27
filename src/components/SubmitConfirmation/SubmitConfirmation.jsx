import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SubmitConfirmation.css'



function submitConfirm() {
    const selectedFlower = useSelector(store => store.selectedFlower);

    const history = useHistory();
    function handleListClick() {
        console.log('clicking back to list');
        // move back to movie list on click
        history.push('/flowerlist')
    }

    function handleBouquetClick() {
        console.log('clicking back to list');
        // move back to movie list on click
        history.push('/userlist')
    }

    console.log('selected floweradnrea', selectedFlower);
    return (

        <div style={{ borderStyle: 'dashed', borderColor: '#a5c2af', marginTop: '24px', backgroundColor: '#e2d3e8'}}>
       <p className='success'> Successful Upload!</p>  
        <img className='andreaFlower' src="https://res.cloudinary.com/dubyogkaz/image/upload/v1648328856/wildflowers/wvam0wnejl4zkuvsq4zw.png"></img>
       <p className='picked'> You Pic(k)ed a <b> {selectedFlower.common_name} </b> </p>
        
        <button onClick={handleBouquetClick}> Check out bouquet </button>
        <button onClick={handleListClick}> Back to Complete List </button>
        </div>
    )
}

export default submitConfirm; 