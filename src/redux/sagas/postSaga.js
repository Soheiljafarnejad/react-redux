import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPostSuccess, FETCH_POST_REQUEST } from "../postReducer";

function* fetchPost(action) {
  try {
    const response = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/posts/${action.payload}`)
    );
    yield put(fetchPostSuccess(response.data));
  } catch (error) {
    yield put(fetchPostSuccess(error.message));
  }
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POST_REQUEST, fetchPost);
}
