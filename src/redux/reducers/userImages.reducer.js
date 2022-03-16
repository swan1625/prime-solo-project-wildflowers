const userImages = (state = [], action) => {
    switch (action.type) {
      case 'SET_IMAGES':
        return action.payload;
      default:
        return state;
    }
  };
  
  
  export default userImages;