const getName = (state = {}, action) => {

    switch (action.type) {
        case 'SET_SELECTED_NAME':
            return action.payload;
        default:
            return state;
    }

}

export default getName;