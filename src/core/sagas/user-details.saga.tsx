import { fetchUserDetail } from "core/services";
import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_USER_DETAIL, setUserDetails, setUserDetailsError } from "../stores/user-details.store";

/** Obtiene el detalle del usuario @saga */
function* getUserDetailsSaga(action: any) {
  try {
    const { data } = yield call(fetchUserDetail, action.payload);
    yield put(setUserDetails(data.data));
  } catch (e) {
    yield put(
      setUserDetailsError({
        message: e?.response?.data?.error || "error",
        status: e?.response?.status || "error",
      })
    );
  }
}

/** EXPORT WATCHERS */
export function* watchGetUserDetails() {
  yield takeLatest(REQUEST_USER_DETAIL, getUserDetailsSaga);
}
