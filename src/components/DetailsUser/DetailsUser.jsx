import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function userDetailsPage({item}){

    const selectedFlower = useSelector(store => store.userSelectedFlower);
    const dispatch = useDispatch();
    const history = useHistory();



    const handleDelete = () => {
        dispatch({type: 'DELETE_ITEM', payload: selectedFlower.id });
        console.log('delete button clicked');
    }

    const handleEdit = () => {
        console.log('item is', selectedFlower.id);
        console.log('edit button clicked');
    }



    useEffect(() => {
        // 
    }, []);

    return(
        <>
        <p> Notes: {selectedFlower.notes}    </p>
        <p> Nearest City: {selectedFlower.nearest_city}  </p>
        <img src={selectedFlower.uploaded_image} />
        <button onClick={handleDelete}> Delete from Boquet </button>
        <button onClick={handleEdit}>Edit Notes</button>
        </>
    )
}


export default userDetailsPage;