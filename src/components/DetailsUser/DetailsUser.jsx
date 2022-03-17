import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


function userDetailsPage({item}){

    const selectedFlower = useSelector(store => store.userSelectedFlower);
    const dispatch = useDispatch();


    const history = useHistory();

    const handleDelete = () => {
        // Swal('what up')
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                
              )
              dispatch({type: 'DELETE_ITEM', payload: selectedFlower.id });
              console.log('delete button clicked');
            }
          })

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
        <button onClick={handleDelete}> Delete from Bouquet </button>
        <button onClick={handleEdit}>Edit Notes</button>
        </>
    )
}


export default userDetailsPage;