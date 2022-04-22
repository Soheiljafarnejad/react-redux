const BUY_CAKE = "BUY_CAKE";

export const buyCake = (value) => {
  return {
    type: BUY_CAKE,
    payload: value,
  };
};

const initState = {
  numOfCake: 10,
};

export const cakeReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - action.payload };
    default:
      return state;
  }
};
