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
        <p> {selectedFlower.common_name} </p>
        <img src={selectedFlower.image_path} />
        <p>{selectedFlower.scientific_name} </p>
        <p> {selectedFlower.color} </p>
        <p> {selectedFlower.flower_size} </p>
        <p> {selectedFlower.genus} </p>
        <p> {selectedFlower.life_cycle}</p>
        <button onClick = {handleClick}> Back to Complete List </button>
        <button onClick = {handleMatchClick}> Think you have a Match? </button>
        
        </>
    )



}


export default detailsPage;