var initialState = "blank";

function StoreReducer(state = initialState, action) {
  if (action.type === "change") {
    state = action.payload;
    // console.log(state);
    return state;
  } else {
    return state;
  }
}

export default StoreReducer;
