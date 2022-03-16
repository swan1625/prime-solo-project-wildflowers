import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FlowerListItem from '../FlowerListItem/FlowerListItem';

function flowerList(){

    const dispatch = useDispatch();

    const flowers = useSelector(store => store.flowerList);

    useEffect(() => {
        // on page load, fetch these things
        dispatch({ type: 'FETCH_FLOWERS' });
    }, []);

console.log(flowers);
    return (

        <div>
        we really out here DOING THE DAMN THING
        {flowers.map((item, i) => {
                return (
                    <FlowerListItem key={i} item={item} />
                )
            })}

        </div>
    )
}

export default flowerList; 