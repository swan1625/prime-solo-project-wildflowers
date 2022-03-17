import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';




function submitConfirm() {


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

    return (

        <>
        Awesome! You Pic(k)ed a flower!

        <button onClick={handleListClick}> Back to Complete List </button>
        <button onClick={handleBouquetClick}> Check out bouquet </button>
        </>
    )
}

export default submitConfirm; 