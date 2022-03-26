const scTotals = (state = [], action) => {
    switch (action.type) {
      case 'SET_SC_FLOWERS':
        return action.payload;
      default:
        return state;
    }
  };
  
  
  export default scTotals;