const BUY_ICE = "BUY_ICE";

export const buyIce = (value) => {
  return {
    type: BUY_ICE,
    payload: value,
  };
};

const initState = {
  numOfIce: 15,
};

export const iceReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return { ...state, numOfIce: state.numOfIce - action.payload };
    default:
      return state;
  }
};
