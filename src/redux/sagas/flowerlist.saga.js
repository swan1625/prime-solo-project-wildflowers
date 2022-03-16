import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchAllFlowers() {
    // get all movies from the DB
    try {
        const flowers = yield axios.get('/flowers');
        console.log('get all flowers:', flowers.data);
        yield put({ type: 'SET_FLOWERS', payload: flowers.data });
    } catch {
        console.log('get all flowers error');
    }
}

function* flowerSaga() {
    yield takeLatest('FETCH_FLOWERS', fetchAllFlowers)
}

export default flowerSaga;

