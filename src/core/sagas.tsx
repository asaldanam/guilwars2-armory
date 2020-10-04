import { all } from "redux-saga/effects";
import { watchGetUserDetails } from "./sagas/user-details.saga";
import watchGetUsers from "./sagas/users.saga";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchGetUsers(),
    watchGetUserDetails(),
  ]);
}
