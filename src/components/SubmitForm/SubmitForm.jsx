// import req from 'express/lib/request';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';



function submitForm() {

    const [city, setCity] = useState('');
    const [notes, setNotes] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [flowerid, setFlowerid] = useState('');

    const history = useHistory();



    const selectedFlower = useSelector(store => store.selectedFlower);
    let flowerIds = selectedFlower.id; 

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(imagePath.name);
        let flowerid = selectedFlower.id;
        console.log('flower id is handle sub', flowerid);
    
        dispatch({type: 'ADD_USER_FLOWER', payload:{ imagePath, notes, city, flowerid } });
        history.push(`/submitconfirm`);
    
      }

    const setFlowerId = (e) => {
      setFlowerid(selectedFlower.id)
    }
      useEffect(() => {
        // on page load run setFlowerID 
       setFlowerid();
    }, []);

console.log('city is', city);
console.log('flowerid is ', selectedFlower.id);
    return (
        <>
        
        <form onSubmit={handleSubmit} encType="multipart/form-data" >
        <input
          type="text"
          placeholder="Nearest City"
          onChange={(event) => setCity(event.target.value)}
        />
                <input
          type="text"
          placeholder="Notes"
          onChange={(event) => setNotes(event.target.value)}
        />
        <input
          type='file'
          name='file'
          placeholder="image"
          onChange={(event) => setImagePath(event.target.files[0])}
        />

        <button type="submit">Add to Bouquet!</button>
      </form>

        </>
    )
    
}

export default submitForm;