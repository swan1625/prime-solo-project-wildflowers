import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchSelectedName(action){
    // get selected name of flower
    try {
        console.log('action payload is ', `${action.payload}`);
        const flowerName = yield axios.get(`/getname/${action.payload}`);
        console.log('get all:', flowerName);
     
        yield put({ type: 'SET_NAME', payload: flowerName.data });
    } catch (error) {
        console.log('get all selected flowername failed', error);
    }

}

function* flowerNameSaga() {
    // yield takeLatest('SET_USER_SELECTED_FLOWER', fetchSelectedName)
}



export default flowerNameSaga; 