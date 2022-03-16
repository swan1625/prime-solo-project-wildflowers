///// flower List Reducer ///// 
const flowerList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FLOWERS':
            return action.payload;
        default:
            return state;

    }
}


export default flowerList; 