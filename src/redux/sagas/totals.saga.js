import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchScFlowers() {
    // get all movies from the DB
    try {
        const scFlowers = yield axios.get('/totals');
        console.log('get all SC flowers:', scFlowers.data);
        yield put({ type: 'SET_SC_FLOWERS', payload: scFlowers.data });
    } catch {
        console.log('get all SC flowers error');
    }
}
function* fetchCommonFlowers() {
    // get all movies from the DB
    try {
        const commonFlowers = yield axios.get('/common');
        console.log('get all SC flowers:', commonFlowers.data);
        yield put({ type: 'SET_COMMON_FLOWERS', payload: commonFlowers.data });
    } catch {
        console.log('get all Common flowers error');
    }
}

function* fetchComoFlowers() {
    // get all movies from the DB
    try {
        const commonFlowers = yield axios.get('/como');
        console.log('get all SC flowers:', commonFlowers.data);
        yield put({ type: 'SET_COMO_FLOWERS', payload: commonFlowers.data });
    } catch {
        console.log('get all Como flowers error');
    }
}





function* totalsSaga() {
    yield takeLatest('FETCH_SC_FLOWERS', fetchScFlowers)
    yield takeLatest('FETCH_COMMON_FLOWERS', fetchCommonFlowers)
    yield takeLatest('FETCH_COMO_FLOWERS', fetchComoFlowers)
}

export default totalsSaga;