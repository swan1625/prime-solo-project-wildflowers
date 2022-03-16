const selectedFlower = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_FLOWER':
            return action.payload;
        default:
            return state;
    }
}
export default selectedFlower; 