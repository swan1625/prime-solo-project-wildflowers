import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function flowerList(){

    const dispatch = useDispatch();

    const flowers = useSelector(store => store.flowerList);

    useEffect(() => {
        // on page load, fetch these things
      
    }, []);


    return (

        <div>
        we really out here DOING THE DAMN THING
        </div>
    )
}

export default flowerList; 