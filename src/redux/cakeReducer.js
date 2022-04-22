const BUY_CAKE = "BUY_CAKE";

export const cakeAction = () => {
  return {
    type: BUY_CAKE,
  };
};

const initState = {
  numOfCake: 10,
};

export const cakeReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 };
    default:
      return state;
  }
};
