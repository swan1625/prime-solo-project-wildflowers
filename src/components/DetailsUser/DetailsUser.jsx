import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


// -------------Material UI Imports--------------
import { Button, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: '#e2d3e8',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const textField = {
    width: 250,
    height: 280,
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500
}



function userDetailsPage({ item }) {

 
    const dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const editNotes = useSelector((store) => store.editNotes);
    const getName = useSelector(store => store.getName );
    const selectedFlower = useSelector(store => store.userSelectedFlower);



    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure you want to delete this flower?',
            text: "This can't be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete Flower'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your flower has been deleted',
                    'success'

                )
                dispatch({ type: 'DELETE_ITEM', payload: selectedFlower.id });
                console.log('delete button clicked');
                history.push('/userlist')
            }
        })

    }

    function handleChange(event) {
        // console.log('in handle change', event.target.value)
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'notes', value: event.target.value }
        });

    }


    function handleEdit(event) {
        event.preventDefault();
        console.log('edit notes is', editNotes);

        axios.put(`/edit/${selectedFlower.id}`, editNotes)
            .then(response => {
                // clean up reducer data            
                dispatch({ type: 'EDIT_CLEAR' });

                // refresh will happen with useEffect on Home
                history.push('/userlist'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            })

    };

    useEffect(() => {
        // on page load, fetch these things
        dispatch({ type: 'SET_SELECTED_NAME', payload: selectedFlower.flower_id})
    }, []);
    console.log('selctedflower is', selectedFlower);

    return (
        <div style={{ borderStyle: 'dashed', borderColor: '#a5c2af', marginTop: '24px', backgroundColor: '#e2d3e8', textAlign: 'center'}}>
           
            <div> {getName.map(commonName => (
                <div key={commonName}> <p className='title'>{commonName.common_name}</p> <br></br> <p> <b> Uploaded Photo: </b></p> <img src={selectedFlower.uploaded_image} /> <p> <b> Index Photo: </b> </p> <img src={commonName.image_path} /> </div>

            ))}  </div>
            
           
            <p> <b> Notes: </b> {selectedFlower.notes}    </p>
            <p><b> Nearest City:</b> {selectedFlower.nearest_city} </p>

          
            <Button  color="error" variant="contained" onClick={handleDelete}>Compost Flower</Button>
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
                    <TextField sx={textField} multiline={true}
                        rows={10}
                        onChange={(event) => handleChange(event)}
                        defaultValue={selectedFlower.notes}
                    />
                    <Button onClick={handleEdit}> Submit Change </Button>
                    <Button onClick={handleClose}> Cancel </Button>
                </Box>

            </Modal>
        </div>
    )
}


export default userDetailsPage;