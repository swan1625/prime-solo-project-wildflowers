import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function detailsPage(){

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

    return(

        <>
        <p> <b>{selectedFlower.common_name} </b> </p>
        <img src={selectedFlower.image_path} />
        <p> Scientific Name: {selectedFlower.scientific_name} </p>
        <p> Color: {selectedFlower.color} </p>
        <p> Height: {selectedFlower.flower_size} </p>
        <p> Genus: {selectedFlower.genus} </p>
        <p> Life Cycle: {selectedFlower.life_cycle}</p>
        <button onClick = {handleClick}> Back to Complete List </button>
        <button onClick = {handleMatchClick}> Think you have a Match? </button>
        
        </>
    )



}


export default detailsPage;