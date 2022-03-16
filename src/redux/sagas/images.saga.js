import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';




function* uploadImage(action) {
    const headers = {
        'content-type': 'multipart/form-data'
      }
  
    const imageForm = new FormData();
    imageForm.append('image', action.payload.imagePath);
    imageForm.append('notes', action.payload.notes);
    imageForm.append('city', action.payload.city)
  
    const response = yield axios({
      method: 'POST',
      url: '/flowers',
      headers: headers,
      data: imageForm
    })
    // yield put({
    //   type: 'FETCH_IMAGES'
    // })
  }


function* imagesSaga() {
    // yield takeLatest('FETCH_IMAGES', fetchImages);
    yield takeLatest('ADD_USER_FLOWER', uploadImage);
  }
  
  
  export default imagesSaga;