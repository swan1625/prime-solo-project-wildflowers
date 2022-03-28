import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import flowerList from './flowerlist.reducer';
import selectedFlower from './flowerlistdetail.reducer';
import userImages from './userImages.reducer';
import userSelectedFlower from './userflowerlistdetail.reducer'
import editNotes from './editnotes.reducer'
import getName from './getname.reducer'
import scTotals from './totals.reducer';
import commonTotal from './common.reducer'
import comoTotals from './como.reducer'
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  flowerList, // total list of flowers 
  selectedFlower, // selected flower in total list 
  userImages, 
  userSelectedFlower,
  editNotes, 
  getName,
  scTotals, 
  commonTotal,
  comoTotals
});

export default rootReducer;
