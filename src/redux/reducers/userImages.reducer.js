const userImages = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_FLOWERS':
        return action.payload;
      default:
        return state;
    }
  };
  
  
  export default userImages;