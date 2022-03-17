import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchAllUserFlowers() {
    // get all movies from the DB
    try {
        const flowers = yield axios.get('/userlist');
        console.log('get all flowers:', flowers.data);
        yield put({ type: 'SET_USER_FLOWERS', payload: flowers.data });
    } catch {
        console.log('get all user flowers error');
    }
}

function* userFlowerSaga() {
    yield takeLatest('FETCH_USER_FLOWERS', fetchAllUserFlowers)
}

export default userFlowerSaga;