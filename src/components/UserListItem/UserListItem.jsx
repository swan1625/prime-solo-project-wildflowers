import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function userFlowerListItem({item}){


    const dispatch = useDispatch();
    const history = useHistory();

    function handleClick() {

      }

    return (

        <div>
            <h3>{item.notes}</h3>
            {/* <img src ={item.image_path} /> */}
            <img src ={item.uploaded_image} />
        </div>
    )

}

export default userFlowerListItem;