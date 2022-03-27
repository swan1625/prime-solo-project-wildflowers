import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Details.css';

import { Box, fontSize } from '@mui/system';

function detailsPage() {

    const selectedFlower = useSelector(store => store.selectedFlower);

    const dispatch = useDispatch();
    const history = useHistory();

    function handleClick() {
        console.log('clicking back to list');
        // move back to movie list on click
        history.push('/flowerlist')
    }

    function handleMatchClick() {
        console.log('match button');
        history.push('/submit')
    }

    useEffect(() => {
        // 
        dispatch({ type: 'FETCH_SELECT_FLOWER', payload: selectedFlower.id })
    }, []);

    return (
        <div>
            <div className='details' style={{ borderStyle: 'dashed', borderColor: '#a5c2af', marginTop: '27px'}} >
                <p className='title'> <b>{selectedFlower.common_name} </b> </p>
                <img src={selectedFlower.image_path} />
                <p> <b>Scientific Name: </b> {selectedFlower.scientific_name} </p>
                <p><b> Color: </b> {selectedFlower.color} </p>
                <p> <b>Height:</b> {selectedFlower.flower_size} </p>
                <p> <b>Genus:</b> {selectedFlower.genus} </p>
                <p> <b>Life Cycle:</b> {selectedFlower.life_cycle}</p>
                <p><b>Status:</b> {selectedFlower.type}</p><br></br>
                <p><b>Think you Found This Flower?</b></p>
                <button onClick={handleMatchClick}> Upload A Photo! </button><br></br>
                <p><b>Or</b></p>
                <button onClick={handleClick}> Go Back to Flower Index </button>
                

            </div>
        </div>
    )

}


export default detailsPage;