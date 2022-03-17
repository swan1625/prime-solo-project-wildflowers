import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import UserListItem from '../UserListItem/UserListItem'


function UserList(){

    const dispatch = useDispatch();
    const flowers = useSelector(store => store.userImages);

    useEffect(() => {
        // on page load, fetch these things
        dispatch({ type: 'FETCH_USER_FLOWERS' });
    }, []);


    console.log(flowers);
    return (

        <>
        We really out here in the digital bouquet! 
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