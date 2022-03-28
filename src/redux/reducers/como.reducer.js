const comoTotals = (state = [], action) => {
    switch (action.type) {
      case 'SET_COMO_FLOWERS':
        return action.payload;
      default:
        return state;
    }
  };

  export default comoTotals; 