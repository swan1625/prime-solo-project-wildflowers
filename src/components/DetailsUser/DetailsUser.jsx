import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function userDetailsPage(){

    const selectedFlower = useSelector(store => store.userSelectedFlower);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // 
    }, []);

    return(
        <>
        <p> Notes: {selectedFlower.notes}    </p>
        <p> Nearest City: {selectedFlower.nearest_city}  </p>
        <img src={selectedFlower.uploaded_image} />
        <p>                             </p>
        <button> Delete from Boquet </button>
        <button>Edit Notes</button>
        </>
    )
}


export default userDetailsPage;