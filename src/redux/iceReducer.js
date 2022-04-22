const BUY_ICE = "BUY_ICE";

export const buyIce = () => {
  return {
    type: BUY_ICE,
  };
};

const initState = {
  numOfIce: 15,
};

export const iceReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return { ...state, numOfIce: state.numOfIce - 1 };
    default:
      return state;
  }
};
