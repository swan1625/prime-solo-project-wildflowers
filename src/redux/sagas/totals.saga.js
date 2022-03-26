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






function* totalsSaga() {
    yield takeLatest('FETCH_SC_FLOWERS', fetchScFlowers)
}

export default totalsSaga;