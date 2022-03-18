import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchSelectedName(action){
    // get selected name of flower
    try {
        const flowerName = yield axios.get(`/getname/${action.payload}]`);
        console.log('get all:', flowerName.data);
        console.log('action payload is ', `${action.payload}`);
        yield put({ type: 'SET_SELECTED_NAME', payload: flowerName.data });
    } catch (error) {
        console.log('get all selected flowername failed', error);
    }

}

export default fetchSelectedName; 