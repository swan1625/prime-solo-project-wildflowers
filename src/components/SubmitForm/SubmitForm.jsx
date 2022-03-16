// import req from 'express/lib/request';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';




function submitForm() {

    const [city, setCity] = useState('');
    const [notes, setNotes] = useState('');
    const [imagePath, setImagePath] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(imagePath.name);
    
        dispatch({type: 'ADD_USER_FLOWER', payload:{ imagePath, notes, city } });
    
      }
console.log('city is', city);
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

        <button type="submit">Add to shelf!</button>
      </form>






        </>
    )
    
}

export default submitForm;