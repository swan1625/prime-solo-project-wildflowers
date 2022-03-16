import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function flowerListItem({item}) {



    const dispatch = useDispatch();

    // const handleDelete = () => {
    //     dispatch({type: 'DELETE_ITEM', payload: item.id });
    // }

    return (
        <div className='flowerItemContainer'>
            <h3>{item.common_name}</h3>
            <img src ={item.image_path} />
            {/* <button onClick={handleDelete}>delete</button> */}
        </div>
    )
}

export default flowerListItem;