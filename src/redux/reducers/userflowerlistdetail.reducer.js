const userSelectedFlower = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_SELECTED_FLOWER':
            return action.payload;
        default:
            return state;
    }
}
export default userSelectedFlower; 