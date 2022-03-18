const editNotes = (state  = {}, action) => { 
    if(action.type === 'SET_EDIT_NOTES'){
        return action.payload;
    }
    if(action.type === 'EDIT_ONCHANGE'){
        return {
            ...state, 
            [action.payload.property]:action.payload.value
        }
    }
    if(action.type === 'EDIT_CLEAR'){
        return {};
    }
    return state;
}

export default editNotes; 