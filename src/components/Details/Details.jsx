import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function detailsPage(){

    const selectedFlower = useSelector(store => store.selectedFlower);

    const dispatch = useDispatch();


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


        
        </>
    )



}


export default detailsPage;