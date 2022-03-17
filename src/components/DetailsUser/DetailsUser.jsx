import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react';


// -------------Material UI Imports--------------
import { Button, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: '#EBDEF0',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };





function userDetailsPage({item}){

    const selectedFlower = useSelector(store => store.userSelectedFlower);
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



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
            confirmButtonText: 'goodbye sweet flower =('
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your flower has been deleted',
                'success'
                
              )
              dispatch({type: 'DELETE_ITEM', payload: selectedFlower.id });
              console.log('delete button clicked');
              history.push('/userlist')
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
        {/* <button onClick={handleDelete}> Delete from Bouquet </button> */}
        <Button color="error"  variant="contained" onClick={handleDelete}>Delete from Bouquet </Button>
        {/* <button onClick={handleEdit}>Edit Notes</button> */}
        <Button variant="contained" onClick={handleOpen}>Edit Notes</Button>

        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
        >
    
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Your Notes
          </Typography>
            <TextField />
            <Button> Submit Change </Button>
            <Button> Cancel </Button>
        </Box>
   
        </Modal>
        </>
    )
}


export default userDetailsPage;