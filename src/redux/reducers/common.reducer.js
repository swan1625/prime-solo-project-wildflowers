const commonTotals = (state = [], action) => {
    switch (action.type) {
      case 'SET_COMMON_FLOWERS':
        return action.payload;
      default:
        return state;
    }
  };

  export default commonTotals; 