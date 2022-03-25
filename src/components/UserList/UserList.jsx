import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import UserListItem from '../UserListItem/UserListItem'


function UserList(){

    const dispatch = useDispatch();
    const flowers = useSelector(store => store.userImages);
    // const selectedFlower = useSelector(store => store.getName)

    useEffect(() => {
        // on page load, fetch these things
        // dispatch({ type: 'SET_SELECTED_NAME'})
        dispatch({ type: 'FETCH_USER_FLOWERS' });
    
    }, []);



    return (

        <>
        <h1> Your Digital Bouquet </h1>
        <div>
        {flowers.map((item, i) => {
                return (
                    <UserListItem key={i} item={item} />
                )
            })}

        </div>
        </>
    )
}

export default UserList; 