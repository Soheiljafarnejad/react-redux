export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

export const fetchPostRequest = (id) => {
  return {
    type: FETCH_POST_REQUEST,
    payload: id,
  };
};

export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

const initState = {
  data: {},
  loading: false,
  error: false,
};

export const asyncPostReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true, data: {}, error: false };
    case FETCH_POST_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: false };
    case FETCH_POST_FAILURE:
      return { ...state, loading: false, data: {}, error: action.payload };
    default:
      return state;
  }
};
