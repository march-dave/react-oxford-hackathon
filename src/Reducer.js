const initialState = {
  btnValue: false
};

const reducer = (state = initialState, action) => {
  console.log(state.btnValue);

  switch (action.type) {
    case "SET_BUTTON": {
      return {
        ...state,
        btnValue: !state.btnValue 
      };
    }
    default:
      return state;
  }
};

export default reducer;
